import Likovi from './Components/Likovi'; 
import Naslovna from './Components/Naslovna';
import Mapa from './Components/Mapa';
import Mitovi from './Components/Mitovi';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Prijava from './Components/Prijava';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path='/' element={<Naslovna/>}> </Route>
          <Route path='/Likovi' element={<Likovi/>}> </Route>
          <Route path='/Mapa' element={<Mapa/>}> </Route>
          <Route path='/Mitovi' element={<Mitovi/>}></Route>
          <Route path='/Prijava' element={<Prijava/>}></Route>
        </Routes>
       </Router>
       
    </div>
  );
}

export default App;
