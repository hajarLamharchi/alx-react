import React from 'react'

function NotificationItem(props) {
  
  return (
    // eslint-disable-next-line
    <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>{props.value}</li>
  );
}

export default NotificationItem