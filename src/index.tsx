import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { DataStoreProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <DataStoreProvider>
      <App />
    </DataStoreProvider>
  </BrowserRouter>
);

reportWebVitals();
