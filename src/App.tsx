import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import TechnologySection from "./Components/Technology/TechnologySection";
import type { ITechnology } from "./types/technologyType";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TechnologySectionFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data/ technologiesData.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technologies data");
  }

  const data = await res.json();

  return data;
};

function App() {
  const TechnologyPromise = TechnologySectionFetch();

  return (
    <>
      <Nav></Nav>

      <Banner></Banner>

      <Suspense
        fallback={
          <h2 className="text-center text-xl font-bold text-pink-700 mt-10 animate-pulse">
            Loading...
          </h2>
        }
      >
        <TechnologySection
          TechnologyPromise={TechnologyPromise}
        ></TechnologySection>
      </Suspense>

      <Footer></Footer>

      <ToastContainer position="top-center" />
    </>
  );
}

export default App;