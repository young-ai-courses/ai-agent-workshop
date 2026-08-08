export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 1.5rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖 我的 AI Agent</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        這是你的 AI 專案起點 — fork 完就上線了，用 Cursor 或 Claude Codex 往裡面加功能
      </p>

      <section style={{ background: '#f8f9fa', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>✅ 部署成功！</h2>
        <p>如果你看到這個頁面，表示你的 Vercel 部署已經正常運作</p>
      </section>

      <section style={{ background: '#f0f7ff', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>🚀 下一步</h2>
        <ol style={{ paddingLeft: '1.2rem', lineHeight: 2 }}>
          <li>打開 <strong>Cursor</strong> 或 <strong>Claude Codex</strong>（你的 IDE）</li>
          <li>Clone 你 fork 的這個 repo</li>
          <li>跟 AI 說：「幫我把這個頁面改成 ___（你的專案名稱）」</li>
          <li>Push → Vercel 自動更新</li>
        </ol>
      </section>

      <section style={{ background: '#fff8f0', borderRadius: 12, padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>💡 專案提案方向</h2>
        <ul style={{ paddingLeft: '1.2rem', lineHeight: 2 }}>
          <li>解決一個企業部門的重複性問題（自動化）</li>
          <li>做一個讓非技術人能操作的 AI 工具（no-code 感）</li>
          <li>展示 AI 如何輔助決策（dashboard / 分析）</li>
        </ul>
        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>
          9/8 前完成 → 9/15 準備 pitch → Demo Day 上台
        </p>
      </section>
    </main>
  );
}
