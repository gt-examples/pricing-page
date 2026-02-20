export default async function loadTranslations(locale: string) {
  const translations = await import(`../public/gt/${locale}.json`);
  return translations.default;
}
