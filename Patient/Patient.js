import React from "react";
import Contact from "./Contact/Contact";
import Profile from "./Profile/Profile";
import YourDoctors from "./Doctors/YourDoctors";
import Schedule from "./Schedule/Schedule";
import MedicalRecords from "./Medicalrecords/MedicalRecords";
import Menu from './Navbar/Menu';
import './patientstyle.css';
import SignIn from '../SignIn'
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Patient = () => {
  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/YourDoctors" component={YourDoctors} />
        <Route path="/Schedule" component={Schedule} />
        <Route path="/MedicalRecords" component={MedicalRecords} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
    <br/>
    </>
  );
};


export default Patient;