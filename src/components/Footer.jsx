export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-400">
        <span>© {new Date().getFullYear()} NC News</span>
        <span>Built during the Northcoders JavaScript Bootcamp</span>
      </div>
    </footer>
  );
}
