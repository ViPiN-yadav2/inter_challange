import "./App.css";
import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./context/themecontext";
import SportsSection from "./components/SportSection";
import SlideShow from "./components/Slidshow";
import ThemeBtn from "./components/themebutton";
function App() {
  let athletes = [
    {
      playerImage: "/images/1.png",
      teamName: "Sacramento River Cats",
      totalEvents: "48 Events",
      sports: "Baseball",
    },
    {
      playerImage: "/images/2.png",
      teamName: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sports: "Baseball",
    },
    {
      playerImage: "/images/3.png",
      teamName: "new jersey devils",
      totalEvents: "48 Events",
      sports: "Baseball",
    },
    {
      playerImage: "/images/2.png",
      teamName: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sports: "Baseball",
    },
  ];
  let advertisement = { adImageUrl: "../images/ad.png" };
  const [thememode, setThemeMode] = useState("dark");

  const lightMode = () => {
    setThemeMode("light");
  };

  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(thememode);
  }, [thememode]);
  return (
    <>
      <ThemeContextProvider value={{ thememode, lightMode, darkMode }}>
        <h1 className="mb-3 font-bold underline decoration-blue-500">Sports</h1>
        <ThemeBtn />
        <SportsSection athletes={athletes} advertisement={advertisement} />
        <SlideShow />
      </ThemeContextProvider>
    </>
  );
}

export default App;
