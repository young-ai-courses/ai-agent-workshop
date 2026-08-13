# 第二堂 操作手冊 — 把上週的自動化變成一個產品

你的角色是**需求方＋驗收方**：規格由你定、驗收由你做，執行交給 AI。
以下每一節是一張工單 —— 交辦內容、以及「做到什麼算完成」的驗收條件。

> ### 上週你做了什麼
> 在 ChatGPT 談清楚規格 → 交給 Codex 寫 code → 放上 GitHub、Actions 自動跑
> → **每週自己產出一份競品週報**（`reports/weekly/2026-Wxx.md`）。
>
> 問題是：那份週報躺在 repo 裡，**只有你看得到、也沒有累積起來**。
>
> ### 今晚把它變成產品
> | | 做什麼 | 為什麼 |
> |---|---|---|
> | ① **Vercel** | 給它一個畫面，別人打得開 | 躺在 repo 裡的檔案不是產品 |
> | ② **Supabase** | 每一週的結果存進資料庫 | 檔案沒辦法累積查詢 |
> | ③ **Groq** | 對累積的週報問答 | 十份週報你不會想一份一份讀 |

---

## 開工前

| 要什麼 | 去哪 |
|---|---|
| **GitHub 帳號** | 第一堂已經有了 |
| **Groq key** | [console.groq.com](https://console.groq.com) → 登入（可用 Google／GitHub）→ 左邊 **API Keys** → **Create API Key** → 馬上複製 |
| **Vercel** | [vercel.com](https://vercel.com) 用 GitHub 登入，不用另外註冊 |

> 🔴 Groq key 等於你的密碼：**只有你本人把它貼進 Vercel 的環境變數**。
> 不要貼進任何 AI 對話（會留在紀錄裡）、不要 commit、不要傳到群組。

免費額度（官方 rate limits，`llama-3.3-70b-versatile`）：
每分鐘 30 次 · 每天 1,000 次 · 每分鐘 12,000 token。看到 **429** 是撞到每分鐘那條，等一下再送。

---

## 工單 1｜Fork 並上線（不用設 Root Directory）

**這顆 repo 的網站就在根目錄**，所以 Vercel Import 不需要改任何設定。

1. 在 GitHub 網頁 **Fork** 這個 repo
2. 到 [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → 選你的 fork
3. 展開 **Environment Variables** → 加 `GROQ_API_KEY`（值貼你剛拿的 key）
4. **Deploy** → 等 30 秒

**驗收條件**：打開網址，看到「競品動態週報」這一頁，而且列出了 `reports/weekly/` 裡的週報。

| 你看到 | 意思 |
|---|---|
| 「還沒有週報」 | `reports/weekly/` 是空的 → 去 Actions 跑一次（工單 2） |
| 問答按鈕按不下去 | 同上，沒有週報就沒東西可問 |
| 送出後說「還沒設定 GROQ_API_KEY」 | 第 3 步漏了，或加完沒 Redeploy |

---

## 工單 2｜讓第一堂那支排程在你的 fork 上跑

Fork 過來的 repo，**GitHub Actions 預設是停用的**。交辦給 AI：

```
我 fork 的這個 repo 裡有 GitHub Actions 的每週排程（Weekly Competitor Digest）。
請幫我確認：它有沒有啟用、cron 設定是什麼、需要哪些 Secrets 才跑得起來。
缺什麼先告訴我，我自己去 GitHub 後台加，不要問我 key 的內容。
```

自己做的話：**Actions 分頁 → 按啟用 → 選 Weekly Competitor Digest → Run workflow**，等 15–30 秒。
它需要的 `GROQ_API_KEY` 加在 **Settings → Secrets and variables → Actions**（跟 Vercel 那份各自獨立）。

**驗收條件**：`reports/weekly/` 多出一個 `2026-Wxx.md`，而且你的網站重新整理後看得到它。

---

## 工單 3｜對週報問答（Groq）

網站上直接問，或改 AI 的行為。要改行為就交辦：

```
把 AI 的角色設定換成這段 —

你是一位科技產業分析助理。使用者會給你「競品動態週報」的內容以及一個問題。
請只根據週報內容回答。
- 回答先給三行結論，再列支持它的文章標題（附週次）
- 每一個說法都要能對到週報裡的某一篇文章；對不到就不要說
- 週報裡沒提到的，直接說「這幾週的週報沒有提到」，不要用你自己的知識補
- 最後另外列一段「我不確定的地方」

只改這件事，其他都不要動。
```

**調參數讓它更穩**：

```
把 temperature 設成 0.2，max_completion_tokens 設成 1200。
```

> 輸出格式每次都跑掉 → **先調 temperature，不要急著換 model**。
> 答案被截斷 → 加大 max_completion_tokens。

**驗收條件**：問「這幾週競品最常出現的主題是什麼」，它的答案裡每一點都指得出週報裡的文章。

---

## 工單 4｜每一週存進 Supabase

現在網站是讀 repo 裡的檔案。存進資料庫之後，週報才會**累積成資料**。

**先接 Supabase**：Vercel 專案 → **Integrations** → Supabase → 裝起來
（環境變數 `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` 會自動注入）→ **Redeploy**。

**建表**（Supabase 後台 → SQL Editor）：

```sql
create table weekly_digests (
  week text primary key,
  content text not null,
  created_at timestamptz default now()
);

alter table weekly_digests enable row level security;

create policy "anyone can read"  on weekly_digests for select to anon using (true);
create policy "anyone can write" on weekly_digests for insert to anon with check (true);
create policy "anyone can update" on weekly_digests for update to anon using (true);
```

然後在網站上按 **「同步到資料庫」** —— 它會把 `reports/weekly/` 的每一份 upsert 進去，
之後那一頁的資料來源會變成「資料庫（Supabase）」。

> 🔴 **anon（publishable）key 本來就會出現在前端，它不是秘密。**
> 真正的邊界是 **RLS ＋ 最小權限 policy**。
> ⚠️ **不要假設 RLS 是開還是關**：從後台 Table Editor 建表通常會幫你開，
> 自己下 SQL 建的就要自己開（上面那行 `enable row level security` 就是）。
> 上面那三條 policy 是「誰都能讀寫」——今天夠用，但那表示任何人都能改你的資料。
> 要分使用者就得先做登入，policy 改成比對 `auth.uid()`。
>
> **驗證方法**：開一個無痕視窗（沒有登入狀態）試著讀，或直接打 API —— 讀得到就是還沒擋住。

**驗收條件**：按完同步，頁面上的「資料來源」變成 **資料庫（Supabase）**；
Supabase 後台 Table Editor 看得到那幾列。

---

## 工單 5｜改壞了：退回上一個可用版本

```
剛才的改動把網站弄壞了。請先不要修。
先找出上一個可以 build、可以開啟的版本，
說明你要退回哪些檔案，等我確認後再執行。
```

> **不要叫它「幫我修好」** —— 它會一直加東西來補，越補越難救。
> 退回去重講一次，五分鐘就解決。退回不算失敗。

---

## 你只會碰三個檔

| 檔案 | 它管什麼 |
|---|---|
| `app/page.jsx` | 畫面：週報怎麼列、問答框長怎樣 |
| `app/api/ai/route.js` | AI 的角色設定、輸出格式、參數 |
| `app/api/sync/route.js` | 怎麼把週報寫進 Supabase |

第一堂那三個檔（`scripts/weekly_competitor_digest.py`、`config.yaml`、
`.github/workflows/weekly-digest.yml`）今晚不用動 —— 它們負責「產出週報」，
今晚做的是「把週報變成產品」。

---

## 卡住的時候

先問它 —— 它讀過這個專案的 `AGENTS.md`，知道這個營隊在做什麼：

```
我卡住了。現在的狀況是＿＿＿，下一步該做什麼？
```

問完還不行，舉手。
