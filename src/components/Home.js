/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from "react";
import "./Home.scss";
import Dish from "./Dish";
import Dish2 from "./Dish2"
/***
 * Displays a grid of Team & People Link to find more details
 */
function Home() {
  return (
    <div className="homes">
    
      <Dish/>
      <Dish2/>

    </div>
  
    
  );
}

export default Home;
