import React from "react";

function MealPage({ params }) {
  let mealTitle = params.meal.replace(/-/g, " ");
  mealTitle = mealTitle.charAt(0).toUpperCase() + mealTitle.slice(1);

  return (
    <main className="main-content">
      <h1>{mealTitle}</h1>
    </main>
  );
}

export default MealPage;
