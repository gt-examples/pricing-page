"use client";

import { T } from "gt-next";
import { useState } from "react";

const categories = ["all", "translation", "collaboration", "security"] as const;

function CheckMark() {
  return (
    <svg
      className="h-5 w-5 text-green-500"
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

function XMark() {
  return (
    <svg
      className="h-5 w-5 text-zinc-300 dark:text-zinc-600"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string")
    return (
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {value}
      </span>
    );
  return value ? <CheckMark /> : <XMark />;
}

type Feature = {
  name: React.ReactNode;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
  category: string;
};

const features: Feature[] = [
  {
    name: <T id="feat.monthly_translations">Monthly translations</T>,
    starter: "1,000",
    pro: "50,000",
    enterprise: "Unlimited",
    category: "translation",
  },
  {
    name: <T id="feat.languages">Supported languages</T>,
    starter: "2",
    pro: "Unlimited",
    enterprise: "Unlimited",
    category: "translation",
  },
  {
    name: <T id="feat.auto_detect">Auto language detection</T>,
    starter: true,
    pro: true,
    enterprise: true,
    category: "translation",
  },
  {
    name: <T id="feat.glossary">Custom glossary</T>,
    starter: false,
    pro: true,
    enterprise: true,
    category: "translation",
  },
  {
    name: <T id="feat.translation_memory">Translation memory</T>,
    starter: false,
    pro: true,
    enterprise: true,
    category: "translation",
  },
  {
    name: <T id="feat.context_hints">Context-aware hints</T>,
    starter: false,
    pro: false,
    enterprise: true,
    category: "translation",
  },
  {
    name: <T id="feat.team_members">Team members</T>,
    starter: "1",
    pro: "10",
    enterprise: "Unlimited",
    category: "collaboration",
  },
  {
    name: <T id="feat.review_workflow">Review workflow</T>,
    starter: false,
    pro: true,
    enterprise: true,
    category: "collaboration",
  },
  {
    name: <T id="feat.comments">Inline comments</T>,
    starter: false,
    pro: true,
    enterprise: true,
    category: "collaboration",
  },
  {
    name: <T id="feat.roles">Role-based access</T>,
    starter: false,
    pro: false,
    enterprise: true,
    category: "collaboration",
  },
  {
    name: <T id="feat.api">API access</T>,
    starter: false,
    pro: true,
    enterprise: true,
    category: "security",
  },
  {
    name: <T id="feat.sso">SSO / SAML</T>,
    starter: false,
    pro: false,
    enterprise: true,
    category: "security",
  },
  {
    name: <T id="feat.sla">SLA guarantee</T>,
    starter: false,
    pro: false,
    enterprise: true,
    category: "security",
  },
  {
    name: <T id="feat.on_premise">On-premise deployment</T>,
    starter: false,
    pro: false,
    enterprise: true,
    category: "security",
  },
  {
    name: <T id="feat.audit_log">Audit log</T>,
    starter: false,
    pro: true,
    enterprise: true,
    category: "security",
  },
];

export default function FeaturesPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all" ? features : features.filter((f) => f.category === filter);

  return (
    <main className="w-full max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          <T id="features.title">Feature Comparison</T>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          <T id="features.subtitle">
            See exactly what you get with each plan
          </T>
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-8 flex justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {cat === "all" && <T id="features.filter.all">All</T>}
            {cat === "translation" && (
              <T id="features.filter.translation">Translation</T>
            )}
            {cat === "collaboration" && (
              <T id="features.filter.collaboration">Collaboration</T>
            )}
            {cat === "security" && (
              <T id="features.filter.security">Security &amp; Infra</T>
            )}
          </button>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                <T id="features.table.feature">Feature</T>
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-900 dark:text-white">
                <T id="features.table.starter">Starter</T>
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                <T id="features.table.pro">Pro</T>
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-zinc-900 dark:text-white">
                <T id="features.table.enterprise">Enterprise</T>
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((feat, i) => (
              <tr
                key={i}
                className={`border-b border-zinc-100 dark:border-zinc-800 ${
                  i % 2 === 0 ? "bg-zinc-50/50 dark:bg-zinc-900/50" : ""
                }`}
              >
                <td className="px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300">
                  {feat.name}
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <Cell value={feat.starter} />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <Cell value={feat.pro} />
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    <Cell value={feat.enterprise} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
