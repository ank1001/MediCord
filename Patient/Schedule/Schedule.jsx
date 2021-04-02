import React from "react";
import GeneralList from "../Schedule/ScheduleData";
import ScheduleCard2 from "../Schedule/ScheduleCard2";
import ScheduleCard from "../Schedule/ScheduleCard";

function Schedulefunc2(val){
  return(
    <ScheduleCard2
      time={val.time}
      reminder_name={val.reminder_name}
    />
  );
}
function Schedulefunc(val){
  return(
    <>
    <div className="schedule_box">
    <ScheduleCard
      title={val.title}
    />
    {val.lists.map(Schedulefunc2)}
    </div>
    </>
  );
}
const Schedule = () => {
  return (
    <>
      <div>
        {GeneralList.map(Schedulefunc)}
      </div>
    </>
  ); 
};


export default Schedule;