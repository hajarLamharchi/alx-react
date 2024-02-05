import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CoursList', () => {
    it('CourseList rendres without crashing', () => {
        shallow(<CourseList />)
    });

    it('CourseList rendes 5 rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});