import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import TradeExchange from "./Components/TradeExchange/TradeExchange";
import './App.css'
import LiquidityListing from "./Components/TradeLiquidity/LiquidityListing";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddLiquidity from "./Components/AddLiquidity/AddLiquidity";
import FarmsListing from "./Components/Earn/Farms/FarmsListing";
import Connect from './Components/Connect/Connect';

function App() {
  return (
    <div className="App">
     <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <Route exact path="/connect" element={<Connect/>}/> */}
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/trade" element={<TradeExchange/>}/>
    <Route exact path="/liquidity" element={<LiquidityListing/>}/>
    <Route exact path="/add" element={<AddLiquidity/>}/>
    <Route exact path="/farms" element={<FarmsListing/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    </div>
  );
}

export default App;
