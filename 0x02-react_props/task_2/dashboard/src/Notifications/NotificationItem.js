import React from 'react'

function NotificationItem({type, html, value}) {
  
  return (
    // eslint-disable-next-line
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
  );
}

export default NotificationItem