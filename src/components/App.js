import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mylist from "../pages/Mylist";
import Noodle from "../pages/Noodle"
import Accueil from "../pages/Accueil"
function App() {
	return (
<BrowserRouter>  
	  <Routes>

      <Route path="/" element={<Accueil />} />
      <Route path="/Noodle" element={<Noodle />} />
      <Route path="/Mylist" element={<Mylist />} /> 
		  <Route path="/Noodle" element={<Noodle />} /> 
      </Routes>
    </BrowserRouter>	)
}

export default App