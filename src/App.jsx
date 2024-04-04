/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom"
import {
  Navbar,
  Experience,
  Introduction,
  MenuGallery,
  Review,
  MyMap,
  Footer,
} from "./components"
import React from "react"

const App = () => {
  return (
    <>
      hi! 
      <Introduction />
      <MenuGallery />
    </>
    // <BrowserRouter >
    //   <div className="relative w-full z-0 font-dovemayo">
    //     <Experience />
    //     <MenuGallery />
    //     <Review />
    //     <MyMap />
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  )
}

export default App
