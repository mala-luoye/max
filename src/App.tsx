import React from "react"
import type { FC } from "react"
import Header from "@/components/Header"

const App: FC = () => (
  <div className="App">
    <Header />
    <p style={{ backgroundColor: "red", height: "1000px", width: "100px" }}></p>
  </div>
)

export default App
