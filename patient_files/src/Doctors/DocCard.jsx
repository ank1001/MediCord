import React from 'react';

function DocCard(props){
    return (
      <>
      <div className="doc_cards">
        <span className="doc_card__category"><h2>{props.doc_name}</h2></span>
        <span><h3>{props.doc_field}</h3></span>
        <span><h3>{props.doc_qualification}</h3></span>
      </div>
    </>
    );
  }

  export default DocCard; 