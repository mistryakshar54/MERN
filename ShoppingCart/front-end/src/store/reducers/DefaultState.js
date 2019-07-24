export const initialState = {
    products: {
        productsList:[
        {
            id: "12121",
            name: "Converse",
            price: 50000,
            currency: "INR",
            description: "Good Laptop",
            rating: 3.5,
            image: "images/converse.jpg"
        },
        {
            id: "12121",
            name: "Laptop",
            price: 50000,
            currency: "INR",
            description: "Good Laptop",
            rating: 3.5,
            image: "images/hp.jpg"
        },
        {
            id: "12121",
            name: "Cover",
            price: 50000,
            currency: "INR",
            description: "Good Laptop",
            rating: 3.5,
            image: "images/cover.jpg"
        }
        ]
    },
    cart: {
        cartItems : [],
        cartSummary : {
            totalItems : 0,
            totalAmount : 0,
            shippingCharge : 0,
            currency : 'INR'
        }
    },
    apiStatus : {
        loadingState : false,
        apiStatus : 200,
        message : ""
    }
};
export default initialState;