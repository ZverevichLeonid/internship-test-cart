import React from "react"
import App from "./App"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <ConfigProvider>
        <AdaptivityProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AdaptivityProvider>
      </ConfigProvider>
      ,
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
