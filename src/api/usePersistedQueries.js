 /*

Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in

accordance with the terms of the Adobe license agreement accompanying it.

*/

import aemHeadlessClient from "./aemHeadlessClient";

import { useEffect, useState } from "react";

/**

 * This file contains the React useEffect custom hooks that:
 * 1. Are called by the React components
 * 2. To get data from AEM GraphQL persisted queries
 * Each custom hook maps to a persisted query and is responsible for:
 * 1. Calling the AEM persisted query
 * 2. Collecting and transforming the returned data into the format expected by the React view components
 * 3. Setting and returning any error state
 *
 //* Private, shared function that invokes the AEM Headless client.
/**

 * Private, shared function that invokes the AEM Headless client.
 * @param {String} persistedQueryName the fully qualified name of the persisted query
 * @param {*} queryParameters an optional JavaScript object containing query parameters
 * @returns the GraphQL data or an error message
 */

async function fetchPersistedQuery(persistedQueryName, queryParameters) {
  let data;
  let err;
  try {
    // AEM GraphQL queries are asynchronous, either await their return or use Promise-based syntax
    const response = await aemHeadlessClient.runPersistedQuery(
    persistedQueryName,
     queryParameters
    );
    // The GraphQL data is stored on the response's data field
   data = response?.data;
  } catch (e) {
    // An error occurred, return the error messages
    err = e
     .toJSON()
      ?.map((error) => error.message)
      ?.join(", ");
  console.error(e.toJSON());
  }
  // Return the GraphQL and any errors
  return { data, err };

}

/**
 * Custom hook that calls the 'foodrestaurant/all' persisted query.
 * @returns an array of Team JSON objects, and array of errors
 */
/**
 * Custom hook that calls the 'foodrestaurant/all' persisted query.
 *
 * @returns an array of Team JSON objects, and array of errors
 */
export function useAllDishes() {
  const [dishes, setDishes] = useState(null);
  const [error, setError] = useState(null);
  // Use React useEffect to manage state changes
  useEffect(() => {
   async function fetchData() {
    const queryParameters = { dishtype:"Veg" };
    // Sets the teams variable to the list of team JSON objects
      // Call the AEM GraphQL persisted query named "foodrestaurant/all"
      const { data, err } = await fetchPersistedQuery("/foodrestaurant/menybydish",queryParameters);
      // Sets the teams variable to the list of team JSON objects
      setDishes(data?.dishList?.items);
      // Set any errors
      setError(err);
    }
    // Call the internal fetchData() as per React best practices

    fetchData();
  }, []);

  // Returns the teams and errors
  return { dishes, error };
}
export function useAllmenuDish() {
  const [dishes, setDishes] = useState(null);
  const [error, setError] = useState(null);
  // Use React useEffect to manage state changes
  useEffect(() => {
   async function fetchData() {
    const queryParameters = { dishtype:"NonVeg" };
    // Sets the teams variable to the list of team JSON objects
      // Call the AEM GraphQL persisted query named "foodrestaurant/all"
      const { data, err } = await fetchPersistedQuery("/foodrestaurant/menybydish",queryParameters);
      // Sets the teams variable to the list of team JSON objects
      setDishes(data?.dishList?.items);
      // Set any errors
      setError(err);
    }
    // Call the internal fetchData() as per React best practices

    fetchData();
  }, []);

  // Returns the teams and errors
  return { dishes, error };
}