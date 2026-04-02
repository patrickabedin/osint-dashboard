export default function Home() {
  // Stub signals — real endpoint: /api/signals (wired to CRUCIX adapter)
  const signals = [
    { time: '2026-04-02 02:44 UTC', symbol: 'BTCUSDT', side: 'SHORT', conf: 75, reason: 'VIX > 30' },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🦅 OSINT ENGINE — LIVE</h1>
        <div style={styles.badge}>
          <span style={styles.dot}></span> ACTIVE
        </div>
      </header>

      <div style={styles.grid}>
        {/* VIX Panel */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>VIX (Fear Index)</h2>
          <div style={styles.bigValue}>—</div>
          <p style={styles.subtext}>Polling CRUCIX localhost:3117</p>
        </div>

        {/* Regime Panel */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Regime</h2>
          <div style={styles.regime}>NEUTRAL</div>
          <p style={styles.subtext}>Updated every 60s</p>
        </div>

        {/* Conflict Score */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Conflict Score</h2>
          <div style={styles.bigValue}>—</div>
          <p style={styles.subtext}>Geopolitical tension index</p>
        </div>

        {/* Supply Chain */}
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Supply Chain Pressure</h2>
          <div style={styles.bigValue}>—</div>
          <p style={styles.subtext}>Z-score (alert &gt; 2.0)</p>
        </div>
      </div>

      {/* Recent Signals */}
      <div style={styles.cardFull}>
        <h2 style={styles.cardTitle}>Last 10 Signals</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Symbol</th>
              <th style={styles.th}>Side</th>
              <th style={styles.th}>Conf</th>
              <th style={styles.th}>Reason</th>
            </tr>
          </thead>
          <tbody>
            {signals.map((s, i) => (
              <tr key={i}>
                <td style={styles.td}>{s.time}</td>
                <td style={styles.td}><b>{s.symbol}</b></td>
                <td style={styles.td}>
                  <span style={s.side === 'LONG' ? styles.long : styles.short}>{s.side}</span>
                </td>
                <td style={styles.td}>{s.conf}%</td>
                <td style={styles.td}>{s.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <footer style={styles.footer}>
        OSINT_ENGINE v1.0 — CRUCIX adapter — Probe mode ($10 / 5x)
      </footer>
    </div>
  );
}

const styles = {
  container: { maxWidth: 960, margin: '0 auto', padding: 24, fontFamily: 'system-ui, sans-serif', background: '#0a0a0f', color: '#e0e0e0', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, borderBottom: '1px solid #222', paddingBottom: 16 },
  title: { fontSize: 28, color: '#f97316', margin: 0 },
  badge: { display: 'flex', alignItems: 'center', gap: 8, background: '#14532d', color: '#4ade80', padding: '6px 14px', borderRadius: 20, fontSize: 14, fontWeight: 600 },
  dot: { width: 10, height: 10, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 },
  card: { background: '#111', border: '1px solid #222', borderRadius: 12, padding: 20 },
  cardFull: { background: '#111', border: '1px solid #222', borderRadius: 12, padding: 20, marginBottom: 24 },
  cardTitle: { fontSize: 14, color: '#888', margin: '0 0 12px 0', textTransform: 'uppercase', letterSpacing: 1 },
  bigValue: { fontSize: 36, fontWeight: 700, color: '#f97316' },
  regime: { fontSize: 28, fontWeight: 700, color: '#facc15' },
  subtext: { fontSize: 12, color: '#555', margin: '8px 0 0 0' },
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid #333', fontSize: 13, color: '#888' },
  td: { padding: '8px 12px', borderBottom: '1px solid #1a1a1a', fontSize: 13 },
  long: { color: '#4ade80', fontWeight: 600 },
  short: { color: '#f87171', fontWeight: 600 },
  footer: { textAlign: 'center', color: '#444', fontSize: 12, paddingTop: 16, borderTop: '1px solid #1a1a1a' },
};
