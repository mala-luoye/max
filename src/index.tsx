import React from "react"
import ReactDOM from "react-dom/client"
// 全局样式
import "@/assets/css/common.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
