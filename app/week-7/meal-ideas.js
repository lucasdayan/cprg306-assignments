"use client";

import Item from "./item";
import React, { useState, useEffect } from "react";
import axios from "axios";

function fetchMealIdeas(ingredient, setMeals) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
      if (response.data.meals != null) {
        setMeals(response.data.meals);
      } else {
        setMeals([]);
      }
    })
    .catch((error) => {
      console.error("Error making HTTP call", error);
    });
}

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  function loadMealIdeas() {
    if (ingredient) {
      fetchMealIdeas(ingredient, setMeals);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <a
              href={`https://www.themealdb.com/meal/${meal.idMeal}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                style={{ width: "100px", height: "100px" }}
              />
              <span>{meal.strMeal}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
