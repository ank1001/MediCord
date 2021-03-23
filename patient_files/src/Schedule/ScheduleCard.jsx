import React from 'react';

function ScheduleCard(props){
    return (
      <>
      <div className="schedule_cards">
        <span className="doc_card__category"><h2>{props.title}</h2></span>
      </div>
    </>
    );
  }

  export default ScheduleCard;