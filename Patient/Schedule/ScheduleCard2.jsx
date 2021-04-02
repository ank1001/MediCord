import React from 'react';

function ScheduleCard2(props){
    return (
      <>
      <div className="schedule_cards">
        <span className="doc_card__category"></span>
        <span><h3>{props.time}{"       "}
        {props.reminder_name}</h3></span>
      </div>
    </>
    );
  }

  export default ScheduleCard2;