import React from 'react';
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AstronomyList from './AstronomyList';

const mockStore = configureMockStore();
const store = mockStore({});
// const fetchData = jest.fn();
// const renderList = jest.fn();
// const refreshList = jest.fn();
// const resetList = jest.fn();

let props = {
    fetchData: jest.fn(),
    astronomy: [
        {
            copyright: "Pavel and Roman Cagas",
            date: "1999-08-19",
            explanation: "Dummy explanation text.",
            hdurl: "https://apod.nasa.gov/apod/image/9908/augeclipse_cagas_big.jpg",
            media_type: "image",
            service_version: "v1",
            title: "Light From The Dark Sun",
            url: "https://apod.nasa.gov/apod/image/9908/augeclipse_cagas.jpg"
        }
    ]
};

describe("AstronomyList", () => {
    let component;
  
    beforeEach(() => {
        component = shallow(
            <Provider store={store}>
                <AstronomyList props={props} />
            </Provider>
        )
    });
  
    it("should render without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });

    it("should render the Fetch More Photos button", () => {
        const fetchButton = component.dive().find('.update_button');
        expect(fetchButton).not.toBeNull();
    });

    it("should render the Reset button", () => {
        const resetButton = component.find('.reset_button');
        expect(resetButton).not.toBeNull();
    });

    // it("should call the fetchData function when the component mounts", () => {
    //     expect(props.fetchData).toBeCalled();
    // });

    // it("should call the refreshList function when the Reset button is clicked", () => {
    //     component.find('.update_button').at(0).simulate('click');
    //     expect(refreshList).toHaveBeenCalled();
    // });

    // it("should call the resetList function when the Reset button is clicked", () => {
    //     component.find('.reset_button').at(0).simulate('click');
    //     expect(resetList).toHaveBeenCalled();
    // });
});