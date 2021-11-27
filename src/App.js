// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pages from "./components/Pages";

// function App() {
//   return (
//     <div className="portfolio-app">
//       <Navbar />

//     </div>
//   );
// }
function App() {
  const [pages] = useState([
    { name: "About me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [activePage, setActivePage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setActivePage}
          activePage={activePage}
        ></Navbar>
      </Header>
      <main>
        <Pages activePage={activePage}></Pages>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
