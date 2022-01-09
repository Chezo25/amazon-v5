import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Header exact path="/login" element={((<Home />), (<Checkout />))} />
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
