import { checkPropTypes } from 'prop-types'
import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader) {
        if (textSecondCell === null || textSecondCell === undefined) {
            return (
                <th colSpan="2">{ textFirstCell }</th>
            )
        } else {
            return (
                <tr>
                    <th>{ textFirstCell }</th>
                    <th>{ textSecondCell }</th>
                </tr>
            )
        }
    } else {
        <tr>
            <td>{ textFirstCell }</td>
            <td>{ textSecondCell }</td>
        </tr>
    }
}

CourseListRow.prototype = {
    isHeader: checkPropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
}

export default CourseListRow