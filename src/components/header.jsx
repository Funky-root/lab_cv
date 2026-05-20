function Header() {
  return (
    <header className="flex flex-col items-start text-left bg-slate-800 text-white p-8 shadow-lg">
      <h1 className="text-4xl font-bold tracking-wide mb-2">
        Oleh Milko
      </h1>

      <p className="text-slate-300">
        Phone: +38 (099) 126-62-00
      </p>

      <p className="text-slate-300">
        Email:{" "}
        <a
          href="mailto:olehmilko10@gmail.com"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          olehmilko10@gmail.com
        </a>
      </p>
    </header>
  );
}

export default Header;