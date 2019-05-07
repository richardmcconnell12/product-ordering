// Display an individual product component. Each product should have a title, short description, price, quantity, and an image.

import dbCalls from "./dbCalls"
dbCalls.getAllProducts();

const productComponent = (product) => {
    const component = `<div>
                        <h2>${product.name}</h2>
                        <img src=${product.img} alt="">
                        <p>${product.price}</p>
                        <p>${product.description}<p>
                        <h4>Quantity: ${product.quantity}</h4>
                        <p>Review: ${product.review}<p>
                        <button>Buy now!</button> <button>Leave a review!</button>
                        </div>
                        <hr>
                `

    return component
}


export default productComponent

// Creating each div card for each product in database.

// Just posting dummy data.
