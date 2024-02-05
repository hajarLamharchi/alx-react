import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types'

function Notifications({displayDrawer}) {
    return (
        <div className='placing'>
            <div className='menuItem'>
            Your notifications
            </div>
            {
                displayDrawer ? (<div className='Notifications'>
                <button style={{ position: "absolute",
                        top: 20,
                        right: 15,
                        border: "none",
                        background: "transparent"
                    }}
                aria-label="Close"
                onClick={() => {console.log('Close button has been clicked');}}>
                    <img src={closeIcon} alt='close-icon' width={"10px"}/>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type="default" value="new course available"/>
                    <NotificationItem type="urgent" value="new resume available"/>
                    <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
                </ul>
            </div>):(<></>)
            }
            
            
        </div>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
  };
  
  Notifications.defaultProps = {
    displayDrawer: false,
  };

export default Notifications;