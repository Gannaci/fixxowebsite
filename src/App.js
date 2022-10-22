import './App.min.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import ProductsView from './views/ProductsView';
import CategoriesView from './views/CategoriesView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishlistView from './views/WishlistView';
import ShoppingcartView from './views/ShoppingcartView';
import FooterSection from './sections/FooterSection';

import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="/contacts" element={<ContactView/>} />
        <Route path="/products" element={<ProductsView/>} />
        <Route path="/categories" element={<CategoriesView/>} />
        <Route path="/search" element={<SearchView/>} />
        <Route path="/compare" element={<CompareView/>} />
        <Route path="/wishlist" element={<WishlistView/>} />
        <Route path="/shoppingcart" element={<ShoppingcartView/>} />
        <Route path="*" element={<NotFoundView/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
