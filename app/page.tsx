export default function ResponsibilityInfrastructureHomepage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Responsibility Infrastructure
            </p>

            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              If responsibility cannot be proven, it does not exist under audit.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Most organisations can show activity. Very few can clearly prove who owned a matter,
              when ownership became real, what was done, what evidence exists, and who verified the result.
              Responsibility Infrastructure closes that gap.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#request"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Request LRIS Check
              </a>

              <a
                href="#what-it-is"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
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
              Responsibility Infrastructure is not a task manager, a CRM, or a workflow tool.
              It is the layer that makes responsibility visible, attributable, and defensible when pressure arrives.
            </p>
            <p>
              It records the movement of responsibility between people, teams, and systems.
              That means an organisation can prove not just what happened, but who owned what at each moment.
            </p>
            <p>
              When something goes wrong, the real question is:
              who was responsible, when did they accept it, what happened next, and can it be proven?
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
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
                body: "Regulators require a clear, defensible account of ownership, action, and proof.",
              },
              {
                title: "Incidents",
                body: "When something breaks, fragments are not enough. The full chain must be reconstructable.",
              },
              {
                title: "Handover risk",
                body: "Responsibility is often lost between people, shifts, teams, and systems.",
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

      {/* RAIL */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Responsibility Rail
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
              Capture → Assign → Accept → Complete → Evidence → Verify → Receipt
            </h2>
          </div>
        </div>
      </section>

      {/* CONVERSION SECTION */}
      <section id="request" className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-semibold">
            Request LRIS Verified Conformance
          </h2>

          <p className="mt-4 text-slate-300">
            If your organisation cannot clearly prove responsibility under inspection or audit,
            request an LRIS review. A structured assessment will determine whether your records
            meet verifiable responsibility standards.
          </p>

          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Organisation name"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-white px-4 py-3 font-medium text-slate-900"
            >
              Submit request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500">
          Responsibility Infrastructure is the system where responsibility is captured, proven, and recorded.
        </div>
      </footer>

    </main>
  );
}
