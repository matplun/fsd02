//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Products from './components/Products';
import PageNotFound from './components/PageNotFound';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Login/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
