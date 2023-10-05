import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import data from "./data";
import '../src/App.css'


export default function App() {

  const cards = data.map(item => {
    return (
    <MainContent
              key={item.id}
              {...item}
    />
    )
  })

  return (
    <div className="container">

      <Navbar />
      <section className="cards-container">
        {cards}
      </section>
      

    </div>
  )
}