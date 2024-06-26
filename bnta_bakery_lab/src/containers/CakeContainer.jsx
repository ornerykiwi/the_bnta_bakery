import { useState } from "react";
import Cake from "../components/Cake";

//make the cake component 

const CakeContainer = () => {

    const [bakeryCakes, setBakeryCakes] = useState([
        {
          cakeName: "Victoria Sponge",
          ingredients: ["eggs", "butter", "sugar", "self-raising flour", "baking powder", "milk"],
          price: 5,
          rating: 5,
        },
        {
          cakeName: "Tea Loaf",
          ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
          price: 2,
          rating: 3,
        },
        {
          cakeName: "Carrot Cake",
          ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
          price: 8,
          rating: 5,
        },
      ])

      const [totalProfit, setTotalProfit] = useState(0); 

      const calcAverageRating = () => {
        const totalRating = bakeryCakes.reduce((acc, cake) => acc + cake.rating, 0);
        return (totalRating / bakeryCakes.length).toFixed(1);
        //might have to change it to cake.rating
      }

      

      return (
        <>
        <h1>The BNTA Bakery</h1>
        <h2>Average Cake Rating: {calcAverageRating()}</h2>
        <p>Total Profit: £{totalProfit}</p>
        <Cake cake = {bakeryCakes[0]}/>
        <Cake cake = {bakeryCakes[1]}/>
        <Cake cake = {bakeryCakes[2]}/>
        </>
      );
}

export default CakeContainer; 

