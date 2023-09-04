/*
Copyright 2022 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying it.
*/
import React from "react";

// import { Link } from "react-router-dom";

import { useAllmenuDish } from "../api/usePersistedQueries";

import Error from "./Error";

import "./Dish2.scss";

import Loading from "./Loading";

function Dish() {
  const { dishes, error } = useAllmenuDish();

  // Handle error and loading conditions

  if (error) {
    return <Error errorMessage={error} />;
  } else if (!dishes) {
    return <Loading />;
  }

  // Teams have been populated by AEM GraphQL query. Display the teams.

  return (
      
 

    <div className = "menu-view">
    <div className="Menu-list1">
        <div>
            <table borde="2">
                <td><div id="rectangle"> 
                <div className = "title">NON VEG</div></div>
                </td>
            </table>
        </div>
      {dishes.map((dish, index) => {
        return <Dishesformenu key={index} {...dish} />;
      })}
    
    </div>
    </div>
  );
}

// Render single Team

function Dishesformenu({ dishName, dishPrice }) {
  // Must have title, shortName and at least 1 team member

  if (!dishName || !dishPrice) {
    return null;
  }

  return (
    <div>

        <table >
            <tr>
                <td ><h3>{dishName}</h3></td>
                <td className = "td-dish"><h3>{dishPrice}</h3></td>
            </tr>
        </table>
      
    </div>
  );
}

export default Dish;
