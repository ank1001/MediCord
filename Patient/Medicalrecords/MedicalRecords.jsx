import React from "react";
import RecordsList from "../Medicalrecords/RecordsData";
import RecordsCard from "../Medicalrecords/RecordsCard";
import RecordsCard2 from "../Medicalrecords/RecordsCard2";

function Recordsfunc2(val){
  return(
    <RecordsCard
      datevalue={val.datevalue}
      buttonvalue={val.buttonvalue}
    />
  );
}
function Recordsfunc(val){
  return(
    <>
    <div className="schedule_box">
    <RecordsCard2
      title={val.title}
    />
    {val.lists.map(Recordsfunc2)}
    </div>
    </>
  );
}
const Records = () => {
  return (
    <>
      <div className="setStyle4">
        {RecordsList.map(Recordsfunc)}
      </div>
    </>
  ); 
};


export default Records;