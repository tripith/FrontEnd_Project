import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from "./components/Navbar.js";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Slider from "./components/Slider.js";
import HotAccessories from './components/HotAccessories.jsx';
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";

import data from "./data/data.json";
import Offers from './components/Offers.jsx';
import Heading from "./components/Heading.jsx";
import StarProduct from "./components/StarProduct.jsx";
import HotAccessoriesMenu from"./components/HotAccessoriesMenu.jsx";
import ProductReview from "./components/ProductReviews.jsx";
import Videos from "./components/Videos.jsx";
import NavOptions  from "./components/NavOptions.jsx";


function App() {

  return (

   
    <Router>
      <PreNavbar/>
      <Navbar/>
     
     <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones}
     fitnessAndLifeStyle={data.fitnessAndLifeStyle} tv={data.tv} laptop={data.laptop}
     home={data.home} audio={data.audio} accessories={data.accessories}
     />



      <Slider start={data.banner.start}/>
      <Offers offer = {data.offer}/>
      <Heading text  = 'Star Prouct '/>
      <StarProduct starProduct = {data.starProduct}/>
      <Heading text  = 'Hot Accessories'/>
      <HotAccessoriesMenu/>

      <Routes>
        
        <Route 
        path='/music' 
        element = {<HotAccessories music = {data.hotAccessories.music} 
        musicCover={data.hotAccessoriesCover.music}
        />}/>

<Route 
        path='/smartDevice' 
        element = {<HotAccessories smartDevice = {data.hotAccessories.smartDevice} 
        smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />}/>



<Route 
        path='/home' 
        element = {<HotAccessories home = {data.hotAccessories.home} 
        homeCover={data.hotAccessoriesCover.home}
        />}/>

<Route 
        path='/lifestyle' 
        element = {<HotAccessories home = {data.hotAccessories.lifeStyle} 
        lifestyleCover={data.hotAccessoriesCover.lifeStyle}
        />}/>

<Route 
        path='/mobileAccesseries' 
        element = {<HotAccessories mobileAccesseries= {data.hotAccessories.mobileAccessories} 
        mobileAccesseriesCover={data.hotAccessoriesCover.mobileAccessories}
        />}/>



      </Routes>

      <Heading text= "ProductReview" />
     <ProductReview ProductReviews={data.productReviews}/>

     <Heading text = "VIDEOS"/>
     <Videos videos = {data.videos}/>
     <Heading text = "IN THE PRESS"/>
     <Banner banner={data.banner}/>
     <Footer footer = {data.footer}/>

    </Router>
  );
}

export default App;
