import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import Search from '../../../client/components/Search';

describe('<Search />', () => {
  const wrapper = shallow(<Search />);

  it('should render check-boxes to select genres', () => {
    expect(wrapper.find('input[type="checkbox"]')).to.have.length(3);
  });

  it('should render input boxes to select duration and username', () => {
    expect(wrapper.find('input[type="text"]')).to.have.length(2);
  });

    it('should render submit button to make a search', () => {
    expect(wrapper.find('input[type="submit"]')).to.have.length(1);
  });

});


/*
render correct user input components

props received : this.props.Submithandler()


*/