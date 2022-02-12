import React from 'react';

const Reminders = () => {
  return <div className="reminders">
      <div className="reminder_wrapper">
          <div className="rem_progress"></div>
          <div className="type">Meetings</div>
          <div className="assigned">Amanda at Ruth's</div>
          <div className="rem-time orange">Today, 4 p.m.</div>
      </div>
      
      <div className="reminder_wrapper">
          <div className="rem_progress"></div>
          <div className="type">Trip</div>
          <div className="assigned">Holidays in Norway</div>
          <div className="rem-time blue">Saturday</div>
      </div>
  </div>;
};

export default Reminders;
