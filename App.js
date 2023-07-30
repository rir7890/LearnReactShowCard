import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
            // <Hero />
    return (
        <div>
            <Navbar />
            <Hero/>
           <div className="showResult"> {
                data.map((x) => (
               <Card 
                key={x.id}
                img={`../images/${x.coverImg}`}
                rating={x.stats.rating}
                reviewCount={x.stats.reviewCount}
                location={x.location}
                title={x.title}
                price={x.price}
                 />
                ))
            }
            </div>
        </div>
    )
}


// <Card 
            //     img="katie-zaferes.png"
            //     rating="5.0"
            //     reviewCount={6}
            //     location="USA"
            //     title="Life Lessons with Katie Zaferes"
            //     price={136}
            // />