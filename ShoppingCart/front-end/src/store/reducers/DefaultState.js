export const initialState = {
         products: {
           productsList: [
             {
               id: "1234",
               name: "Apple",
               price: 50000,
               currency: "Rs",
               description: "Fresh Apples",
               rating: 3.5,
               image: "images/apple.jpg"
             },
             {
               id: "1235",
               name: "Banana",
               price: 50000,
               currency: "Rs",
               description: "Fresh Bananas",
               rating: 3.5,
               image: "images/banana.jpg"
             },
             {
               id: "1236",
               name: "Orange",
               price: 50000,
               currency: "Rs",
               description: "Fresh Oranges",
               rating: 3.5,
               image: "images/orange.jpg"
             },
             {
               id: "1237",
               name: "Peach",
               price: 50000,
               currency: "Rs",
               description: "Fresh Peach",
               rating: 3.5,
               image: "images/peach.jpg"
             },
             {
               id: "1237",
               name: "Pear",
               price: 50000,
               currency: "Rs",
               description: "Fresh Pear",
               rating: 3.5,
               image: "images/pear.jpg"
             }
           ]
         },
         cart: {
           cartItems: [],
           cartSummary: {
             totalItems: 0,
             totalAmount: 0,
             shippingCharge: 0,
             currency: "INR"
           }
         },
         apiStatus: {
           loadingState: false,
           apiStatus: 200,
           message: ""
         }
       };
export default initialState;