import { useEffect, useState } from "react";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Reviews from "./components/reviews";
import ContactForm from "./components/ContactForm";

function App() {

  const [theme, setTheme] = useState("light");
  useEffect(() => {

    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {

      setTheme("light");

    } else {

      setTheme("dark");

    }

  }, []);
  const toggleTheme = () => {

    setTheme(theme === "light" ? "dark" : "light");

  };

  return (

    <div
      className={
        theme === "dark"
          ? "bg-slate-900 text-white min-h-screen py-10"
          : "bg-slate-200 text-black min-h-screen py-10"
      }
    >

      <div
        className={
          theme === "dark"
            ? "max-w-5xl mx-auto bg-slate-800 shadow-xl"
            : "max-w-5xl mx-auto bg-white shadow-xl"
        }
      >

        <Header />
        <div className="px-6 pt-4">

          <button
            onClick={toggleTheme}
            className="bg-slate-700 text-white px-4 py-2 rounded"
          >
            Toggle Theme
          </button>

        </div>

        <div className="flex">

          {/* ЛІВА ЧАСТИНА */}
          <div className="w-2/3 p-6 space-y-6">

            <Profile />

            <Experience />

            <ContactForm />

            <Reviews />

          </div>

          {/* ПРАВА ЧАСТИНА */}
          <div
            className={
              theme === "dark"
                ? "w-1/3 bg-slate-700 p-6 space-y-6"
                : "w-1/3 bg-slate-100 p-6 space-y-6"
            }
          >

            <Skills />

            <Languages />

            <Education />

          </div>

        </div>

        <Footer />

      </div>

    </div>
  );
}

export default App;