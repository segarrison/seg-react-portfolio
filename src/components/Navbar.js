import React from 'react';

function Navbar (props){
  const {
    pages = [],
    setActivePage,
    activePage,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentPage.name);
  // }, [currentPage]);

  return (    
      <nav>
        <ul className="flex-row">
          {pages.map((Pages) => (
            <li
              className={`mx-5 ${
                activePage.name === Pages.name && 'navActive'
                }`}
              key={Pages.name}
            >
              <span
                onClick={() => setActivePage(Pages)}
              >
                {Pages.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
// return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">Sarah Garrison</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">About Me</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Portfolio</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Contact</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link">Resume</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
);
}

export default Navbar;