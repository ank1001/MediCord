import React from "react";
import DocCard from "../Doctors/DocCard";
import DoctorsData from "../Doctors/DoctorsData";
function YourDoctorsCard(val){
    return(
        <DocCard
        doc_name={val.doc_name}
        doc_field = {val.doc_field}
        doc_qualification = {val.doc_qualification}
        />
    );
}
const YourDoctors = () => {
  return (
    <>
      <div className="setStyle4">
        {DoctorsData.map(YourDoctorsCard)}
      </div>
    </>
  );
};


export default YourDoctors;