export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0f2740 0%, #09111d 28%, #05080f 62%, #030507 100%)",
        color: "#f5f7fb",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          padding: "88px 28px 120px",
        }}
      >
        {/* HERO */}
        <section style={{ marginBottom: "88px" }}>
          <div
            style={{
              display: "inline-block",
              marginBottom: "22px",
              padding: "8px 14px",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Defined and stewarded by La Touche
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(54px, 8vw, 96px)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              fontWeight: 650,
              maxWidth: "900px",
              textShadow: "0 8px 40px rgba(0,0,0,0.35)",
            }}
          >
            Responsibility
            <br />
            Infrastructure<span style={{ opacity: 0.8 }}>™</span>
          </h1>

          <p
            style={{
              marginTop: "28px",
              marginBottom: "22px",
              maxWidth: "760px",
              fontSize: "clamp(22px, 2.6vw, 32px)",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.92)",
              fontWeight: 420,
            }}
          >
            The system of record for human responsibility.
          </p>

          <p
            style={{
              maxWidth: "720px",
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.68)",
            }}
          >
            A governance layer that records, verifies, and preserves the movement
            of responsibility across people, systems, and organisations.
          </p>
        </section>

        {/* DEFINITION BLOCK */}
        <section
          style={{
            marginBottom: "32px",
            padding: "32px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            boxShadow: "0 20px 80px rgba(0,0,0,0.28)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.52)",
              marginBottom: "18px",
            }}
          >
            Core Definition
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: "760px",
              fontSize: "28px",
              lineHeight: 1.35,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.96)",
            }}
          >
            Responsibility Infrastructure establishes a continuous, verifiable
            record of who owns something, what was done, and when it happened.
          </p>
        </section>

        {/* 3 PILLARS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginBottom: "92px",
          }}
        >
          {[
            ["Ownership", "Who holds the responsibility."],
            ["Action", "What was actually done."],
            ["Time", "When responsibility moved or was discharged."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "26px 24px",
                borderRadius: "22px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "12px",
                }}
              >
                {title}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "20px",
                  lineHeight: 1.45,
                  letterSpacing: "-0.02em",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </section>

        {/* SECTIONS */}
        <Section
          number="01"
          title="Responsibility Gap"
          text="In most organisations, responsibility is assumed, unclear, or lost over time. That creates exposure across operations, compliance, safeguarding, and decision-making."
        />

        <Section
          number="02"
          title="Standard Flow"
          text="Responsibility Infrastructure provides a structured lifecycle through a sequence that can be recorded, evidenced, verified, and trusted under pressure."
        >
          <div
            style={{
              marginTop: "26px",
              padding: "24px 26px",
              borderRadius: "22px",
              border: "1px solid rgba(88,167,255,0.22)",
              background:
                "linear-gradient(180deg, rgba(23,53,87,0.52) 0%, rgba(12,23,39,0.45) 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                lineHeight: 1.35,
                letterSpacing: "-0.035em",
                color: "#f7fbff",
                fontWeight: 600,
              }}
            >
              Capture → Assign → Accept → Complete → Evidence → Verify → Receipt
            </div>

            <div
              style={{
                marginTop: "18px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Every step is recorded.
              <br />
              Nothing is overwritten.
              <br />
              Every action is provable.
            </div>
          </div>
        </Section>

        <Section
          number="03"
          title="Governance Outcome"
          text="Used properly, Responsibility Infrastructure produces demonstrable accountability, reduced operational risk, clear compliance visibility, and defensible records under audit."
        />

        {/* FOOTER / AUTHORITY */}
        <section
          style={{
            marginTop: "96px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontSize: "15px",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Responsibility Infrastructure is defined and stewarded by La Touche.
          </p>

          <p
            style={{
              margin: "0 0 34px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.42)",
            }}
          >
            © {new Date().getFullYear()} La Touche. All rights reserved.
          </p>

          <a
            href="https://latouche.ai"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              padding: "14px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.04)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
            }}
          >
            <span>Visit La Touche</span>
            <span style={{ opacity: 0.72 }}>→</span>
          </a>
        </section>
      </div>
    </main>
  );
}

function Section({
  number,
  title,
  text,
  children,
}: {
  number: string;
  title: string;
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: "34px 0 42px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.45)",
          marginBottom: "14px",
        }}
      >
        {number}
      </div>

      <h2
        style={{
          margin: "0 0 14px",
          fontSize: "clamp(30px, 4vw, 44px)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          fontWeight: 620,
          color: "#f8fbff",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: 0,
          maxWidth: "760px",
          fontSize: "18px",
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.72)",
        }}
      >
        {text}
      </p>

      {children}
    </section>
  );
}
