import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import TrackList from '../../../client/components/TrackList';
import TrackListItem from '../../../client/components/TrackListItem';


describe('<TrackList />', () => {
  it('renders the list of TrackListItems', () => {
    var list = [
      {track1: 'track1'},
      {track2: 'track2'},
      {track3: 'track3'}
    ];
    const wrapper = shallow(<TrackList trackList={list} />);
    expect(wrapper.find('TrackListItem')).to.have.length(3);
  });
});


