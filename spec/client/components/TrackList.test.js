import React from 'react';
import { shallow } from 'enzyme';
import TrackList from '../../../client/components/TrackList';

describe('<TrackList />', () => {
  it('should render one <TrackListItem /> component', () => {
    const wrapper = shallow(<TrackList trackList={[1]} />);
    expect(wrapper.find('TrackListItem').length).toBe(1);
  });

  it('should render two <TrackListItem /> components', () => {
    const wrapper = shallow(<TrackList trackList={[1, 2]} />);
    expect(wrapper.find('TrackListItem').length).toBe(2);
  });
});

