import productComponent from "./productComponent"

const productList = (productArr) => {

    const productDiv = document.getElementById("output");
    console.log(productDiv)
    let allProduct = "";


    productArr.forEach(productObj => {
        allProduct += productComponent(productObj);
    })
    console.log(allProduct)
    productDiv.innerHTML = allProduct;
};

export default productList

// Making the list of products to be appended to DOM.
