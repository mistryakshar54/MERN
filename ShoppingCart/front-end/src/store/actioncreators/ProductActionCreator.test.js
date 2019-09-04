import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as ProductActions from './ProductActionCreator';
import "../../setupTests";
import configureMockStore from "redux-mock-store";
import expect from "expect";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const productList = [
             {
               id: "1234",
               name: "Sofa",
               price: 50000,
               currency: "Rs",
               description: "Fresh Apples",
               rating: 3.5,
               image: "images/sofa.jpg"
             }]

describe('Test ProductActions' , () => {

    it("Should return FetchAllProducts Action" , () => {
        const mockActionResponse = {
          type: "FETCH_ALL_PRODUCTS",
          productsList: productList
        };
        expect(ProductActions.fetchAllProducts(productList)).toEqual(
          mockActionResponse
        );
    });

    it("Mock FetchAllProductsThunk", () => {
      fetchMock.getOnce("http://example.com/todos", [{"currency":"Rs","description":"Good Sofa","image":"images/sofa.jpg","name":"Sofa","price":50000,"productId":"671458","rating":4},{"currency":"Rs","description":"Comfirtable Studytable","image":"images/studytable.jpg","name":"Study Table","price":30000,"productId":"671459","rating":3.5},{"currency":"Rs","description":"Queen Size Good bed","image":"images/queen_size_bed.jpg","name":"Bed","price":100000,"productId":"671460","rating":4.5},{"currency":"Rs","description":"Wardrobe with wooden touch","image":"images/wardrobe.jpg","name":"Wardrobe","price":50000,"productId":"671461","rating":3},{"currency":"Rs","description":"Confi Recliner","image":"images/recliner.jpg","name":"Recliner","price":40000,"productId":"671462","rating":3.5}] 
      );

        const store = mockStore({
          productList : [
             {
               id: "1234",
               name: "Sofa",
               price: 50000,
               currency: "Rs",
               description: "Fresh Apples",
               rating: 3.5,
               image: "images/sofa.jpg"
             }]
        });

     return store.dispatch( ProductActions.fetchDataThunk() ).then(() => {

         console.log("Store Actions: ", store.getActions());
     });
    });

});