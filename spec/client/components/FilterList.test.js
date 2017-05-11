import React from 'react';
import { shallow } from 'enzyme';
import FilterList from '../../../client/components/FilterList';

describe('<FilterList />', () => {
  it('should not contain filters', () => {
    const wrapper = shallow(<FilterList />);
    expect(wrapper.contains(<div>You have not created any filters.</div>)).toBe(true);
  });

  it('should render one <DropdownButton /> element', () => {
    const wrapper = shallow(<FilterList />);
    wrapper.setState({filters: [1, 2]});
    expect(wrapper.find('DropdownButton').length).toBe(1);
  });

  it('should render two <MenuItem /> elements', () => {
    const wrapper = shallow(<FilterList />);
    wrapper.setState({filters: [1, 2]});
    expect(wrapper.find('MenuItem').length).toBe(2);
  });

});
