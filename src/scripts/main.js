// Parsing data to be passed into productList.
import productList from "./productList"
import dbCalls from "./dbCalls"

dbCalls.getAllProducts()
    .then(products => {
        productList(products);
    })
