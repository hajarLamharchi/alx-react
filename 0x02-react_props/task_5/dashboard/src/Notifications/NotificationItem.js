import React from 'react'
import PropType from 'prop-types'


NotificationItem.PropType = {
  __html: PropType.shape({
    html: PropType.string
  }),
  type: PropType.string.isRequired,
  value: PropType.string
}

NotificationItem.defaultProps = {
  type: "default"
}

function NotificationItem({type, html, value}) {
  
  return (
    // eslint-disable-next-line
    <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}>{value}</li>
  );
}


export default NotificationItem