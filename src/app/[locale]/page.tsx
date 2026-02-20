import { T } from "gt-next";

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      {/* Demo Banner */}
      <div className="w-full bg-blue-600 py-2 text-center text-sm font-medium text-white">
        <T id="banner.demo">
          This is a demo application built with{" "}
          <a
            href="https://generaltranslation.com"
            className="underline hover:text-blue-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Translation
          </a>
        </T>
      </div>

      <main className="w-full max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            <T id="pricing.title">Simple, transparent pricing</T>
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            <T id="pricing.subtitle">
              Choose the plan that works best for your team. All plans include a
              14-day free trial.
            </T>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Starter */}
          <div className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              <T id="pricing.starter.name">Starter</T>
            </h2>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white"><T id="pricing.starter.price">$0</T></span>
              <span className="ml-1 text-zinc-500 dark:text-zinc-400"><T id="pricing.perMonth">/month</T></span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <T id="pricing.starter.description">Perfect for trying things out</T>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.starter.f1">1,000 translations per month</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.starter.f2">2 languages</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.starter.f3">Community support</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.starter.f4">Basic analytics</T>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
              <T id="pricing.starter.cta">Get Started</T>
            </button>
          </div>

          {/* Pro */}
          <div className="relative flex flex-col rounded-2xl border border-blue-600 bg-white p-8 shadow-xl shadow-blue-100 dark:bg-zinc-900 dark:shadow-blue-900/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
              <T id="pricing.popular">Most Popular</T>
            </div>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              <T id="pricing.pro.name">Pro</T>
            </h2>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white"><T id="pricing.pro.price">$49</T></span>
              <span className="ml-1 text-zinc-500 dark:text-zinc-400"><T id="pricing.perMonth">/month</T></span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <T id="pricing.pro.description">For growing teams and products</T>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.pro.f1">50,000 translations per month</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.pro.f2">Unlimited languages</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.pro.f3">Priority support</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.pro.f4">Advanced analytics</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.pro.f5">Custom glossary</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.pro.f6">API access</T>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              <T id="pricing.pro.cta">Start Free Trial</T>
            </button>
          </div>

          {/* Enterprise */}
          <div className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              <T id="pricing.enterprise.name">Enterprise</T>
            </h2>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                <T id="pricing.enterprise.price">Custom</T>
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              <T id="pricing.enterprise.description">For large-scale deployments</T>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.enterprise.f1">Unlimited translations</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.enterprise.f2">Unlimited languages</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.enterprise.f3">Dedicated support</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.enterprise.f4">Custom integrations</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.enterprise.f5">SLA guarantee</T>
              </li>
              <li className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <CheckIcon />
                <T id="pricing.enterprise.f6">On-premise option</T>
              </li>
            </ul>
            <button className="mt-8 w-full rounded-lg bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
              <T id="pricing.enterprise.cta">Contact Sales</T>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-zinc-500 dark:text-zinc-400">
            <T id="pricing.questions">
              Have questions?{" "}
              <a
                href="mailto:support@generaltranslation.com"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Contact us
              </a>{" "}
              — we&apos;re happy to help.
            </T>
          </p>
        </div>
      </main>
    </div>
  );
}
