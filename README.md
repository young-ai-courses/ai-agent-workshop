# AI Agent 實作課 — 第二堂帶走包

> 新北市青年局 AI 實戰職涯營｜2026-08-13 第二堂｜講師：蔡子揚（Young）

今天結束的時候，你會有一個**別人打得開、能操作、真的有 AI 在裡面**的網站 ——
而且你不會打到任何一行指令。你的角色是需求方＋驗收方，執行交給 Codex。

## 這個 Repo 給你什麼

| 你要做的事 | 去哪裡 |
|---|---|
| 🎯 **把東西做上線** | [QUICKSTART.md](QUICKSTART.md) —— 六張工單，各附驗收條件 |
| 🤖 **專案內建助教** | [AGENTS.md](AGENTS.md) —— Codex 開啟專案時自動讀取，知道這堂課的目標與規則 |
| 📖 **Agent prompt 模板** | [agent-prompts.md](agent-prompts.md) |
| 🧱 **範例程式（會議筆記整理器）** | `starter-kit/` —— 前端 ＋ 一支伺服器端 AI 入口 |
| 🖼 **投影片與講稿** | `slides/` |

## 今天做的東西

貼一段亂七八糟的會議筆記 → AI 整理成三類（待辦 / 決議 / 待確認）的表格 → 上線給別人用。

AI 呼叫走 Groq，**key 只在伺服器端** —— 這是今天唯一的架構觀念，
也是新手最貴的錯（把 key 放前端等於公開）。

---

<details>
<summary>上一版說明（Cursor / Claude 網頁版路線，留存參考）</summary>

> **Fork 這個 → Deploy to Vercel → 開始做你的 Demo Day 專案**

## ⚡ 30 秒開始

1. 右上角按 **Fork**
2. 去 [vercel.com](https://vercel.com) → Import 你的 fork → Root Directory 填 `starter-kit` → Deploy
3. 你有網址了 🎉 → 用 [Cursor](https://cursor.sh) 或 [Claude](https://claude.ai) 改成你的專案

完整步驟 → **[QUICKSTART.md](QUICKSTART.md)**

## 📦 裡面有什麼

| 檔案 | 幹嘛用 |
|------|--------|
| `starter-kit/` | Next.js 空殼 app，Vercel 一鍵上線 |
| `agent-prompts.md` | Agent Prompt 模板 ×6（存起來反覆用的 AI 員工） |
| `review-assistant.md` | 貼進 AI = 了解課程的私人助教 |
| `QUICKSTART.md` | Fork → Deploy → 改 完整步驟 |

## 🗓 時間表

| 日期 | 里程碑 |
|------|--------|
| 8/13 ✅ | 拿到 Agent Prompt + Fork + Deploy |
| 8/14 – 9/7 | ⚡ 你們組自己完成產品 |
| 9/8 | Aaron 老師 Pitch 準備(1) — 要能展示東西 |
| 9/15 | Pitch 準備(2) |
| 10 月初 | 🎤 Demo Day |

## 想看「做完長怎樣」？

→ [ai-agent-product](https://github.com/young-ai-courses/ai-agent-product)（Email 分類 Agent 範例）

## ❓ 卡住了？

把 `review-assistant.md` 裡的內容貼進 Claude/ChatGPT → 它變成你的私人助教

---

*新北市青年局 AI 實戰職涯營 · 2026 第二屆 · 講師：蔡子揚*

</details>
