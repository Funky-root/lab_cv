import { useEffect, useState } from "react";

function Footer() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const systemInfo = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    localStorage.setItem("systemInfo", JSON.stringify(systemInfo));

    const storedData = JSON.parse(localStorage.getItem("systemInfo"));
    setInfo(storedData);
  }, []);

  return (
    <footer className="bg-slate-800 text-white text-center p-4 mt-10">
      <p className="text-sm opacity-80">© 2026 Oleh Milko</p>

      {info && (
        <div className="mt-2 text-xs opacity-70">
          <p><strong>Platform:</strong> {info.platform}</p>
          <p><strong>UserAgent:</strong> {info.userAgent}</p>
        </div>
      )}
    </footer>
  );
}

export default Footer;