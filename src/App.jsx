import { useEffect, useState } from "react";
import Header from "./components/header.jsx";
import Profile from "./components/profile.jsx";
import Skills from "./components/skills.jsx";
import Languages from "./components/languages.jsx";
import Experience from "./components/experience.jsx";
import Education from "./components/education.jsx";
import Footer from "./components/footer.jsx";
import Reviews from "./components/reviews.jsx";
import ContactForm from "./components/ContactForm.jsx";

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