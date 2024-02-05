import { checkPropTypes } from 'prop-types'
import React from 'react'
import PropTypes from 'prop-types'

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
    if (isHeader) {
        if (textSecondCell === null) {
            return (
                <th colSpan="2">{ textFirstCell }</th>
            )
        } else {
            return (
                <>
                    <th>{ textFirstCell }</th>
                    <th>{ textSecondCell }</th>
                </>
            )
        }
    } else {
        <>
            <td>{ textFirstCell }</td>
            <td>{ textSecondCell }</td>
        </>
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