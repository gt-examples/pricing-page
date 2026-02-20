# Pricing Page

A multilingual SaaS pricing page built with Next.js and gt-next, showcasing locale-aware translation of UI components.

**[Live Demo](https://pricing-page.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example demonstrates how to build a fully translated pricing page using General Translation. All text — headings, descriptions, feature lists, buttons, and metadata — is translated across six locales using the `<T>` component and `getGT` server function.

## GT Features Used

- `<T>` — JSX translation
- `getGT` — Server-side string translations
- `<GTProvider>` — Client-side translation context
- `loadTranslations` — Local translation storage
- `createNextMiddleware` — Automatic locale routing

## Getting Started

```bash
git clone https://github.com/gt-examples/pricing-page.git
cd pricing-page
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
