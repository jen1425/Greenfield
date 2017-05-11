import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Controls from '../../../client/components/Controls';

describe('<Controls />', () => {
  it('should render one <Search /> component', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('Search')).to.have.length(1);
  });

  it('should render one <FilterList /> component', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('FilterList')).to.have.length(1);
  });

  it('should render one <CreateFilter /> component', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('CreateFilter')).to.have.length(1);
  });

});


