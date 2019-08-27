export const initialState = {
         products: {
           productsList: [
            //  {
            //    id: "1234",
            //    name: "Sofa",
            //    price: 50000,
            //    currency: "Rs",
            //    description: "Fresh Apples",
            //    rating: 3.5,
            //    image: "images/sofa.jpg"
            //  },
            //  {
            //    id: "1235",
            //    name: "Study Table",
            //    price: 50000,
            //    currency: "Rs",
            //    description: "Fresh Bananas",
            //    rating: 3.5,
            //    image: "images/studytable.jpg"
            //  },
            //  {
            //    id: "1236",
            //    name: "Bed",
            //    price: 50000,
            //    currency: "Rs",
            //    description: "Fresh Oranges",
            //    rating: 3.5,
            //    image: "images/queen_size_bed.jpg"
            //  },
            //  {
            //    id: "1237",
            //    name: "Wardrobe",
            //    price: 50000,
            //    currency: "Rs",
            //    description: "Fresh Peach",
            //    rating: 3.5,
            //    image: "images/wardrobe.jpg"
            //  },
            //  {
            //    id: "1237",
            //    name: "Recliner",
            //    price: 50000,
            //    currency: "Rs",
            //    description: "Fresh Pear",
            //    rating: 3.5,
            //    image: "images/recliner.jpg"
            //  }
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
         auth: {
           authToken: null,
           isAuthenticated: false,
           authUser: {},
           expiresAt: 0
         },
         core: {
           loadingState: false,
           apiStatus: 200,
           message: "",
           toggleErrorModal: false,
           toggleAlert: false,
           appState: {}
         },
         order: {
           currentOrder: {},
           orderList: []
         }
       };
export default initialState;