import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import { useState } from 'react';
import HomePage from './pages/HomePage';
import Filter from './components/Filter';
// import { ShoppingCart } from './context/ShoppingCart';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import SplashScreen from './pages/SplashScreen';

function App() {
  // const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<SplashScreen />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/filter"} element={<Filter />} />
          {/* <Route path={"/shoppingcart"} element={<ShoppingCart />} /> */}
          <Route path={"/productlist"} element={<ProductList />} />
          <Route path={"/product/:id"} element={<ProductDetails />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
