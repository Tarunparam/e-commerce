import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';

// Import pages
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/cart';

// Import separate Login and Signup pages
import Login from './pages/login';
import Signup from './pages/signup';

import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <ShopContextProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Main Shop Routes */}
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />

            {/* Authentication Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ShopContextProvider>
  );
}

export default App;
