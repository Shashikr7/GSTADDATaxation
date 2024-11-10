import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './Notification.css';

const notifications = [
  "The last date for filing GSTR-1 for October 2024 is November 11, 2024, and for GSTR-3B, it's November 20, 2024.",
  "Here is another notification for you.",
  "Don't miss this important update!",
  "Stay tuned for more notifications.",
];

const NotificationBar = () => {
  return (
    <div className="notification-bar">
      <div className="notification-track">
        {notifications.map((message, index) => (
          <div key={index} className="notification">
            <FontAwesomeIcon icon={faBell} className="notification-icon" />
            <span className="notification-message">{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
