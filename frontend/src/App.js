
import './App.css';
import {Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import Commemorative from './components/Commemorative';
import Exclusive from './components/Exclusive';
import Bullion from './components/Bullion';
import Details from './components/Details';


function App() {
  return (
    <div className="all">
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/commemorative"  element={<Commemorative/>}/>4
        <Route path="/bullion"  element={<Bullion/>}/>
        <Route path="/exclusive"  element={<Exclusive/>}/>
        <Route path="/:id" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
