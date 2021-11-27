// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";

// function App() {
//   return (
//     <div className="portfolio-app">
//       <Navbar />
      
//     </div>
//   );
// }
function App() {
  const [pages] = useState([
    {
      name: "About me"
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        {/* <Page currentPage={currentPage}></Page> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
