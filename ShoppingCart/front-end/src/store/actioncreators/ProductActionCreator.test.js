import thunk from "redux-thunk";
import instance from "../../axiosConfig/axiosconfig";
import * as ProductActions from './ProductActionCreator';
import "../../setupTests";
import configureMockStore from "redux-mock-store";
import expect from "expect";
import moxios from 'moxios';
import initialState from '../reducers/DefaultState';

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
    let store;
      beforeEach(() => {
        moxios.install(instance);
         store = mockStore(initialState);
      });
      afterEach(() => {
        moxios.uninstall();
      });

      it("Loads all products correctly", done => {
        moxios.wait(function() {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: productList
          });
        });

        const expectedActions = [
          {
            type: "LOADING_API"
          },
          {
            type: "FETCH_ALL_PRODUCTS",
            productsList: productList
          },
          {
            type: "SUCCESS_API"
          }
        ];
        return store
          .dispatch(ProductActions.fetchAllProductsThunk())
          .then(() => {
            const actualAction = store.getActions();
            expect(actualAction).toEqual(expectedActions);
            done();
          });
      });

      it("Throws Error when no Products are fetched!", done => {
        moxios.wait(function() {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: []
          });
        });

        const expectedActions = [
          {
            type: "LOADING_API"
          },
          {
            type: "ERROR_API",
            status: 404,
            message: "No Products Fetched"
          }
        ];
        return store
          .dispatch(ProductActions.fetchAllProductsThunk())
          .then(() => {
            const actualAction = store.getActions();
            expect(actualAction).toEqual(expectedActions);
            done();
          });
      });

});