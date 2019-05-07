const dbCalls = {

    getAllProducts() {
        return fetch("http://localhost:8088/products")
            .then(response => response.json())
        // .then(parsedProducts => {
        //     console.log(parsedProducts);

        // })
    }
}

export default dbCalls