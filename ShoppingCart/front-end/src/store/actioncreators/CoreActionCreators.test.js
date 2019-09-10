import instance from "../../axiosConfig/axiosconfig";
import * as CoreActions from "./CoreActionCreators";
import "../../setupTests";
import expect from "expect";
import moxios from "moxios";

describe('Testcases for Core Action Creator Thunks' , () => {

    beforeEach(() => {
      moxios.install(instance);
    });
    afterEach(() => {
      moxios.uninstall();
    });
    
    it("Makes a GET request correctly" , () => {
        moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: [
            {
                id: "1111",
                name: "Sofa",
                price: 150000,
                currency: "Rs",
                description: "Fresh Apples",
                rating: 3.5,
                image: "images/sofa.jpg"
            }
            ]
        });
        });    
        
        return CoreActions.dispatchGET( "products.json" ).then(resp => {
            let expectedResponse = [
              {
                id: "1111",
                name: "Sofa",
                price: 150000,
                currency: "Rs",
                description: "Fresh Apples",
                rating: 3.5,
                image: "images/sofa.jpg"
              }
            ];
            expect(  expectedResponse ).toEqual( resp.data );
        }).catch( err => {
            console.log("Error ", err);
        });
    
    });
    it("Makes a POST request correctly", () => {
        moxios.wait(function() {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: []
          });
        });

        let payload = {
          id: "1111",
          name: "Sofa",
          price: 150000,
          currency: "Rs",
          description: "Fresh Apples",
          rating: 3.5,
          image: "images/sofa.jpg"
        };
        return CoreActions.dispatchPOST("products", payload)
          .then(resp => {
            expect(resp.status).toEqual(200);
          })
          .catch(err => {
            console.log("Error ", err);
          });
    });

});