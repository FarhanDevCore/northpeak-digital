export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p>&copy; {new Date().getFullYear()} NorthPeak Digital. All rights reserved.</p>
        <p>
          <a 
            href="https://digitalheroesco.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-400 transition-colors underline decoration-dotted underline-offset-4 font-medium"
          >
            Built for Digital Heroes Training Task
          </a>
        </p>
      </div>
    </footer>
  );
}