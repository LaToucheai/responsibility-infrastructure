export default function GatekeeperPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Responsibility Infrastructure
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
            Stop Recording Activity. Start Proving Responsibility.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            When something goes wrong, organisations are asked one question:
            <br />
            <strong>Who was responsible — and can you prove it?</strong>
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Most cannot answer clearly. Not because nothing happened, but because
            responsibility was never recorded in a way that holds under pressure.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-2xl font-semibold">
            Request Access to the Executive View
          </h2>

          <p className="mt-4 text-slate-600">
            A controlled introduction to the Responsibility Infrastructure framework.
            Designed for organisations where ambiguity carries real cost.
          </p>

          <form
            action="/api/request-access"
            method="POST"
            className="mt-10 grid gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="rounded-xl border border-slate-300 px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              className="rounded-xl border border-slate-300 px-4 py-3"
            />

            <input
              type="text"
              name="organisation"
              placeholder="Organisation"
              required
              className="rounded-xl border border-slate-300 px-4 py-3"
            />

            <select
              name="sector"
              required
              className="rounded-xl border border-slate-300 px-4 py-3"
            >
              <option value="">Select sector</option>
              <option>Regulated Care / NHS</option>
              <option>Compliance / Legal</option>
              <option>Private Healthcare</option>
              <option>Other</option>
            </select>

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-6 py-3 text-white font-medium hover:opacity-90"
            >
              Request Access
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-8 text-sm text-slate-500">
          La Touche — Responsibility Infrastructure
        </div>
      </footer>
    </main>
  );
}
