import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../client/components/app';

describe('<App />', () => {
  it('should render one <Nav /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Nav').length).toBe(1);
  });

  it('should render one <TrackList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('TrackList').length).toBe(1);
  });

  it('should render one <Controls /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Controls').length).toBe(1);
  });

});
