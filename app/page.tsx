export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Sleep Science Powered
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Recover from Sleep Debt,{" "}
          <span className="text-[#58a6ff]">Scientifically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Get a personalized sleep recovery schedule that eliminates accumulated sleep debt without disrupting your life. Built for professionals, students, and shift workers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Recovering — $8/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No commitment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "🧠", title: "Smart Algorithm", desc: "Calculates your exact sleep debt and builds a realistic payback schedule." },
          { icon: "📅", title: "Daily Plans", desc: "Receive day-by-day bedtime and wake-up targets tailored to your routine." },
          { icon: "📈", title: "Track Progress", desc: "Log your sleep and watch your debt shrink toward full recovery." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Personalized recovery schedule",
              "Daily sleep targets & reminders",
              "Sleep debt tracker & dashboard",
              "Shift worker & travel mode",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the sleep debt calculator work?",
              a: "You input your recent sleep history and ideal sleep need. Our algorithm computes your accumulated deficit and generates a gradual recovery schedule that adds 15–30 minutes per night until you're fully recovered."
            },
            {
              q: "Is this suitable for shift workers?",
              a: "Yes. Shift worker mode accounts for rotating schedules and irregular hours, building recovery plans that adapt to your changing work pattern."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel with one click from your account dashboard. You keep access until the end of your billing period with no penalties."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Sleep Debt Recovery Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
