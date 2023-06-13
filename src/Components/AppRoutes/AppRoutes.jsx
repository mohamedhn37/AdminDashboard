import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Candidats from '../../Pages/Candidats/Candidats'
import Offres from '../../Pages/Offres/Offres'
import Sociétés from '../../Pages/Sociétés/Sociétés'
import Setting from '../../Pages/Setting/Setting';


function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Candidats" element={<Candidats/>}></Route>
        <Route path="/Offres" element={<Offres/>}></Route>
        <Route path="/Sociétés" element={<Sociétés/>}></Route>
        <Route path="/Setting" element={<Setting/>}></Route>
      </Routes>
  );
}
export default AppRoutes;
