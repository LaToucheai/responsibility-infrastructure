export default function ResponsibilityInfrastructureHomepage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Responsibility Infrastructure
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              The system that records how responsibility moves, is accepted, and is proven.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Most organisations can show activity. Very few can clearly prove who owned a matter,
              when ownership became real, what was done, what evidence exists, and who verified the
              result. Responsibility Infrastructure closes that gap.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#what-it-is"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Learn more
              </a>
              <a
                href="#why-it-matters"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Why it matters
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="what-it-is">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              What it is
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              A system of record for responsibility.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              Responsibility Infrastructure is not a task manager, a CRM, or a generic workflow tool.
              It is the layer that makes responsibility visible, attributable, and defensible when the
              pressure arrives.
            </p>
            <p>
              It records the movement of responsibility between people, teams, and systems. That means
              an organisation can understand not just what happened, but who owned what at each moment.
            </p>
            <p>
              When something goes wrong, the question is rarely “what data do you have?” The real
              question is “who was responsible, when did they accept it, what happened next, and can it
              be proven?”
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50" id="why-it-matters">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Why it matters
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Activity is not the same as accountable truth.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Inspections",
                body: "Regulators and reviewers need a clear account of ownership, action, and proof.",
              },
              {
                title: "Incidents",
                body: "When something breaks, fragments are not enough. The chain must be reconstructable.",
              },
              {
                title: "Handover risk",
                body: "Responsibility often gets lost between people, shifts, teams, and systems.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Core idea
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Clear responsibility. Clear proof. Clear record.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              "Capture",
              "Responsibility",
              "Proof",
              "Receipt",
            ].map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 p-6">
                <p className="text-sm text-slate-400">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                The shift
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                From documenting activity to proving responsibility.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Existing systems usually record notes, tasks, or events. Responsibility Infrastructure
                records responsibility itself.
              </p>
              <p>
                That makes it possible to produce a trusted account under pressure: who owned the matter,
                when it moved, what was done, and whether the outcome was verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                What it changes
              </p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Better decisions when the stakes are high.
              </h2>
            </div>
            <div className="grid gap-4">
              {[
                "Reduces ambiguity during incidents and escalations",
                "Improves retrieval of the full accountability chain",
                "Supports audit, inspection, and governance review",
                "Creates a stronger, clearer source of operational truth",
              ].map((point) => (
                <div key={point} className="rounded-2xl bg-slate-50 p-5 text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          Responsibility Infrastructure is the system where responsibility is captured, understood,
          and proven.
        </div>
      </footer>
    </main>
  );
}
