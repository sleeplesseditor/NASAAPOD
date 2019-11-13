import React from 'react';
import { shallow } from "enzyme";
import NavBar from './NavBar';

describe("NavBar", () => {
    let component;
  
    beforeEach(() => {
        component = shallow(<NavBar />);
    });
  
    it("should render without throwing an error", () => {
        expect(component.exists()).toBe(true);
    });
  
    it("should render the Navbar logo", () => {
      const navbarLogo = component.find('.logo_image');
      expect(navbarLogo).toHaveLength(1);
    });
  
    it("should render the Navbar header text", () => {
        const navbarTitle = component.find('.nav_header');
        expect(navbarTitle).toHaveLength(1);
    });
});
  