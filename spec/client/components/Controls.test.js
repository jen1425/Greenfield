import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../../../client/components/Controls';

describe('<Controls />', () => {
  it('should render one <Nav /> component', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('Search').length).toBe(1);
  });

  it('should render one <TrackList /> component', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('FilterList').length).toBe(1);
  });

  it('should render one <Controls /> component', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('CreateFilter').length).toBe(1);
  });
});

