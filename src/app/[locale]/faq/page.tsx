"use client";

import { T } from "gt-next";
import { useState } from "react";

type FaqItem = { q: React.ReactNode; a: React.ReactNode };

const faqs: FaqItem[] = [
  {
    q: <T id="faq.q1">What happens after my 14-day free trial?</T>,
    a: (
      <T id="faq.a1">
        After your trial ends, you can continue on the free Starter plan or
        upgrade to Pro or Enterprise. No credit card is required to start, and
        you won&apos;t be charged automatically.
      </T>
    ),
  },
  {
    q: <T id="faq.q2">Can I switch plans later?</T>,
    a: (
      <T id="faq.a2">
        Absolutely! You can upgrade or downgrade at any time. When upgrading,
        you&apos;ll be prorated for the remainder of your billing cycle.
        Downgrades take effect at the next billing period.
      </T>
    ),
  },
  {
    q: <T id="faq.q3">How does the translation count work?</T>,
    a: (
      <T id="faq.a3">
        Each unique string sent for translation counts as one translation.
        Repeated strings are cached and don&apos;t count against your quota.
        Translation memory helps reduce usage over time.
      </T>
    ),
  },
  {
    q: <T id="faq.q4">What languages are supported?</T>,
    a: (
      <T id="faq.a4">
        We support over 100 languages and dialects. The Starter plan includes 2
        languages of your choice. Pro and Enterprise plans include all available
        languages at no extra cost.
      </T>
    ),
  },
  {
    q: <T id="faq.q5">Is there an API for programmatic access?</T>,
    a: (
      <T id="faq.a5">
        Yes! Pro and Enterprise plans include full REST API access. You can
        integrate translations into your CI/CD pipeline, CMS, or any custom
        workflow. We provide SDKs for JavaScript, Python, and Go.
      </T>
    ),
  },
  {
    q: <T id="faq.q6">Do you offer refunds?</T>,
    a: (
      <T id="faq.a6">
        We offer a 30-day money-back guarantee on all paid plans. If you&apos;re
        not satisfied, contact our support team and we&apos;ll process a full
        refund — no questions asked.
      </T>
    ),
  },
  {
    q: (
      <T id="faq.q7">
        Can I use General Translation with my existing i18n setup?
      </T>
    ),
    a: (
      <T id="faq.a7">
        Yes! GT integrates seamlessly with popular frameworks like Next.js,
        React, and Vue. You can use our gt-next or gt-react packages alongside
        your existing internationalization libraries.
      </T>
    ),
  },
];

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-zinc-900 dark:text-white">
          {item.q}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-zinc-500 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {item.a}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="w-full max-w-3xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          <T id="faq.title">Frequently Asked Questions</T>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          <T id="faq.subtitle">
            Everything you need to know about our plans and services
          </T>
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white px-8 dark:border-zinc-800 dark:bg-zinc-900">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} item={faq} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-600 dark:text-zinc-400">
          <T id="faq.still_questions">
            Still have questions?{" "}
            <a
              href="contact"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Get in touch →
            </a>
          </T>
        </p>
      </div>
    </main>
  );
}
