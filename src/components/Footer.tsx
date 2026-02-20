import { T } from "gt-next";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <T id="footer.text">
          Built with{" "}
          <a
            href="https://generaltranslation.com"
            className="font-medium text-blue-600 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            General Translation
          </a>
          . Instantly localized into 6 languages.
        </T>
      </div>
    </footer>
  );
}
