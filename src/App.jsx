import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Hero,Home } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Hero />
            </>
          }
        />
        <Route
          path="/channels"
          exact
          element={
            <>
              <Home/>
            </>
          }
        />
        <Route
          path="/channels/:id"
          exact
          element={
            <>
              <Home/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
