import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Navigation from "./components/Navigation";
import DriverMessages from "./pages/DriverMessages";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/messages"
          element={
            <>
              <Navigation />
              <DriverMessages />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
