// import logo from './logo.svg';
// import './App.css';
// import './components/UseState';

// function App() {
//   return (
//     <div className="LearningUseState">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           hi! priyanka
//         </p>
//         <a
//           className="LearningUseState"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import LearningUseState from './components/UseState/LearningUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LearningUseState />
      </header>
    </div>
  );
}

export default App;
