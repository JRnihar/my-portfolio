
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Skill from './Components/Skill';

function App() {
  return (
    <div >
     <Header></Header>
     <Routes>
       <Route path='home' element={<Home></Home>}></Route>
       <Route path='about' element={<About></About>}></Route>
       <Route path='skill' element={<Skill></Skill>}></Route>
       <Route path='contact' element={<Contact></Contact>}></Route>
       <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
     </Routes>
    </div>
  );
}

export default App;
