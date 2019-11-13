import React from 'react';
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from './App';
import Navbar from './components/NavBar';
import AstronomyList from './components/NavBar';

const mockStore = configureMockStore();
const store = mockStore({});

describe("App", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
          <App />
      </Provider>
  )
  });

  it("should render without throwing an error", () => {
      expect(component.exists()).toBe(true);
  });

  it("should render the Navbar component", () => {
    const navbarComponent = component.dive().find(Navbar);
    expect(navbarComponent).toHaveLength(1);
  });

  it("should render the Astronomy List component", () => {
    const astronomyListComponent = component.dive().find(AstronomyList);
    expect(astronomyListComponent).toHaveLength(1);
  });
});
