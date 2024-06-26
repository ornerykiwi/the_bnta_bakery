const Cake = ({cake, soldCake}) => {

    //utility functions

    const handleSellButton = () => {
        soldCake(cake.price);
        console.log("You sold a " + cake.cakeName + " cake!"); 

    }

    return (
        <>
        <h3>{cake.cakeName}</h3>
        <ul>Ingredients:
            <li>{cake.ingredients[0]}</li>
            <li>{cake.ingredients[1]}</li>
            <li>{cake.ingredients[2]}</li>
            <li>{cake.ingredients[3]}</li>
            <li>{cake.ingredients[4]}</li>
            <li>{cake.ingredients[5]}</li>
        </ul>
        <h4>Price: £{cake.price}</h4>
        <button onClick={handleSellButton}>Sell</button>

        </>
    )
}

export default Cake;