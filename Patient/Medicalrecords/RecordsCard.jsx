import React from 'react';

function RecordCard(props){
    return (
      <>
      <div className="records_cards">
        <span className="doc_card__category"><h2>{props.title}</h2></span>
        <span><h3>{props.datevalue} {"     "}
        <button className="doc_button">{props.buttonvalue}</button></h3></span>
      </div>
    </>
    );
  }

  export default RecordCard;