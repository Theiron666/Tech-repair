import React from "react";
import "./index.css";
import "./components/css/App.css";
import "./components/css/header.css";
import "./components/css/home.css";
import "./components/css/card.css";
import "./components/css/contact.css";
import "./components/css/footer.css";
import "./components/css/about.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cards from "./components/Cards";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import "./components/main/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          
          <Route path="/about" exact component={About}>
            <About />
          </Route>

          <Route path="/">
            <Home />
            <Cards />
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
