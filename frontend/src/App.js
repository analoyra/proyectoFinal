
import './App.css';
//import './styles/layout/Nav.css';

import { BrowserRouter , Routes , Route} from "react-router-dom";
    
   
    import React from "react";
    import Header from "./components/layout/header";
    import Naveg from "./components/layout/nav";
    import Footer from "./components/layout/footer";
    
    import ContactoPage from './pages/ContactoPage';
    import HomePage from "./pages/HomePage";
    import NosotrosPage from "./pages/NosotrosPage";
    import ProductosPage from "./pages/ProductosPage";
    
    
    function App() {
      return (
        <div className="App">
          <Header />
          <BrowserRouter>
          <Naveg/>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="nosotros" element={<NosotrosPage/>}/>
            <Route path="articulos" element={<ProductosPage/>}/>
            <Route path="contacto" element={<ContactoPage/>}/>
          </Routes>
          </BrowserRouter>
          
          <Footer/>
        </div>
      );
    }
    
    export default App;
    
 



