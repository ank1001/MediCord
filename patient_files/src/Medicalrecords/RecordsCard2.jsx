import React from 'react';

function RecordCard2(props){
    return (
      <>
      <div className="records_cards">
        <span className="doc_card__category"><h2>{props.title}</h2></span>
      </div>
    </>
    );
  }

  export default RecordCard2;