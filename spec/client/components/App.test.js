import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../client/components/app';

describe('<App />', () => {
  it('should render one <Nav /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Nav)).to.have.length(1);
  });

  it('should render one <TrackList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(TrackList)).to.have.length(1);
  });

  it('should render one <Controls /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Controls)).to.have.length(1);
  });

});
