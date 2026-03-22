export default function Home() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        lineHeight: 1.7,
        color: "#111",
      }}
    >
      {/* HEADER */}
      <section style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Responsibility Infrastructure™
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          The System of Record for Human Responsibility
        </p>
      </section>

      {/* DEFINITION */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "14px", letterSpacing: "1px", opacity: 0.6 }}>
          1. DEFINITION
        </h2>

        <p>
          Responsibility Infrastructure is a governance layer that records,
          verifies, and preserves the movement of responsibility across people,
          systems, and organisations.
        </p>

        <p>
          It establishes a continuous, verifiable record of:
        </p>

        <ul>
          <li>who owns something</li>
          <li>what was done</li>
          <li>when it happened</li>
        </ul>
      </section>

      <hr style={{ margin: "50px 0", opacity: 0.2 }} />

      {/* PROBLEM */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "14px", letterSpacing: "1px", opacity: 0.6 }}>
          2. RESPONSIBILITY GAP (PROBLEM STATEMENT)
        </h2>

        <p>
          In most organisations, responsibility is:
        </p>

        <ul>
          <li>assumed</li>
          <li>unclear</li>
          <li>lost over time</li>
        </ul>

        <p>This creates exposure across:</p>

        <ul>
          <li>operations</li>
          <li>compliance</li>
          <li>safeguarding</li>
          <li>decision-making</li>
        </ul>
      </section>

      <hr style={{ margin: "50px 0", opacity: 0.2 }} />

      {/* SOLUTION */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "14px", letterSpacing: "1px", opacity: 0.6 }}>
          3. STANDARD FLOW (LRIS)
        </h2>

        <p>
          Responsibility Infrastructure provides a structured lifecycle through:
        </p>

        <p style={{ fontWeight: "bold", fontSize: "16px" }}>
          Capture → Assign → Accept → Complete → Evidence → Verify → Receipt
        </p>

        <p>
          Every step is recorded.
          <br />
          Nothing is overwritten.
          <br />
          Every action is provable.
        </p>
      </section>

      <hr style={{ margin: "50px 0", opacity: 0.2 }} />

      {/* OUTCOME */}
      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "14px", letterSpacing: "1px", opacity: 0.6 }}>
          4. GOVERNANCE OUTCOME
        </h2>

        <ul>
          <li>demonstrable accountability</li>
          <li>reduced operational risk</li>
          <li>clear compliance visibility</li>
          <li>defensible records under audit</li>
        </ul>
      </section>

      <hr style={{ margin: "50px 0", opacity: 0.2 }} />

      {/* AUTHORITY */}
      <section style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "14px", opacity: 0.7 }}>
          Responsibility Infrastructure is defined and stewarded by La Touche.
        </p>

        <p style={{ fontSize: "12px", opacity: 0.5 }}>
          © {new Date().getFullYear()} La Touche. All rights reserved.
        </p>
      </section>

      {/* CTA */}
      <section>
        <a
          href="https://latouche.ai"
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            borderBottom: "1px solid #111",
          }}
        >
          → Visit La Touche
        </a>
      </section>
    </main>
  );
}
