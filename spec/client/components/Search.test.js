import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import Search from '../../../client/components/Search';
import sinon from 'sinon';

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

  it('should call submitHandler prop when Submit button is clicked', () => {
    var submitHandler = sinon.spy();
    var submitWrapper = shallow(<Search submitHandler={submitHandler}/>);
    submitWrapper.find('input[type="submit"]').simulate('click');
    expect(submitHandler.calledOnce).to.equal(true);
  });

});


/*
render correct user input components

user interaction :
  clicking check box calls appropriate function
  typing in text box calls appropriate function
  submit search calls appropriate function

props received : this.props.Submithandler() was received and called



*/
