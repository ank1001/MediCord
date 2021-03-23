import React from "react";
import ContactCard from "../Contact/ContactCard";
import ContactData from "../Contact/ContactData";
function Contactfunc(val){
    return(
        <ContactCard
        doc_name={val.doc_name}
        doc_field = {val.doc_field}
        />
    );
}
const Contact = () => {
  return (
    <>
      <div className="setStyle4">
        {ContactData.map(Contactfunc)}
      </div>
    </>
  );
};


export default Contact;