
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import TechnologySection from './Components/Technology/TechnologySection'
import type { ITechnology } from './types/technologyType'



const TechnologySectionFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/ technologiesData.json");
  const data = await res.json();

  return data
}


function App() {

  const TechnologyPromise = TechnologySectionFetch();


  return (
    <>
      <Nav></Nav>

      <Banner></Banner>

      <Suspense fallback={<h2 className="text-center text-xl font-bold text-pink-700 mt-10 animate-pulse">
        Loading...
      </h2>}>
        <TechnologySection
          TechnologyPromise={TechnologyPromise}
        ></TechnologySection>

      </Suspense>

    </>
  )
}


export default App

