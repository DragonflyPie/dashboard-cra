import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./routes/dashboard/Dashboard";
import "./scss/main.scss";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/errorPage/ErrorPage";
import Results from "./routes/results/Results";
import { loader } from "./utils/loader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="finalize/:testId"
        element={<Results heading="Finalize" />}
        loader={loader}
      />
      <Route
        path="results/:testId"
        element={<Results heading="Results" />}
        loader={loader}
      />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
