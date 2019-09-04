import React from "react";
import { mount } from "enzyme";
import {Loader} from "./Loader";
import "../../../setupTests";
import configureMockStore from "redux-mock-store";
import expect from 'expect';
const mockStore = configureMockStore();

let props = {
  dataLoaded: false,
  apiData: {
    loadingState: true,
    apiStatus : 200
  }
};

function createComponent(props ) {
  return mount(<Loader {...props} />);
}
function createComponentWithChildren(props) {
  return mount(
    <Loader {...props}>
      <div id="dataToLoad">Data Loaded!</div>
    </Loader>
  );
}

describe("Loader Component Test", () => {
    it("Renders the component correctly", () => {
        
        const wrapper = createComponent(props);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it("Renders Loader if the api is still loading", () => {
        props.apiData.loadingState = true;
        const wrapper = createComponent(props);
        expect(wrapper.exists(".Spinner")).toBe(true);
        expect(wrapper.debug()).toMatchSnapshot();   
    });

    it("Renders Children if the results are fetched correctly", () => {
      props.apiData.loadingState = false;
      props.dataLoaded = true;
      const wrapper = createComponentWithChildren(props);
      expect(wrapper.find("#dataToLoad").text()).toEqual("Data Loaded!");
      expect(wrapper.debug()).toMatchSnapshot();
    });
});
