import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseListRow', () => {
    it('CourseListRow renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Available courses" />);
        expect(wrapper.find('th').prop("colSpan")).toBe(2);
        expect(wrapper.find('th').text("Available courses"));
    });

    it('CourseListRow renders two cells when textSecondCell exists', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
        expect(wrapper.find('th')).toHaveLength(2);
        expect(wrapper.find('th').at(0).text()).toBe("Course name");
        expect(wrapper.find('th').at(1).text()).toBe("Credit");
    });

    it('CourseListRow renders two td elements with a tr element', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
        expect(wrapper.find('td')).toHaveLength(2);
        expect(wrapper.find('td').at(0).text()).toBe("ES6");
        expect(wrapper.find('td').at(1).text()).toBe("60");
    });
});