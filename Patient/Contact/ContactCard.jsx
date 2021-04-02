import React from 'react';

function ContactCard(props){
    return (
      <>
      <div className="doc_cards">
        <span className="doc_card__category"><h2>{props.doc_name}</h2></span>
        <span><h3>{props.doc_field}</h3></span>
        <input className="contact_input"/><button className="contact_button">Send</button>
      </div>
    </>
    );
  }

  export default ContactCard; 