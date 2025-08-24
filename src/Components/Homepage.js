import React from "react";
import './Css/Homepage.css'
import Footer from "./Footer";
import Nav from "./Nav";
import Whatsup from "./Whatsup";
function Home() {
  
  return (<>
            <Nav/>
            <div className="home-container">
                <div className="home-content">
                    <h1>Welcome to Aabel Steel Fabricators</h1>
                    <p>Your trusted partner for steel works.</p>
                </div>
            </div>
            <Whatsup/>
            <Footer/>    
            </>
  );
}

export default Home;
