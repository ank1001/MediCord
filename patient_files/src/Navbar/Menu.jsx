import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <>
        <div className="mainMenu">
            <NavLink exact activeClassName="active_class" to="/">
                Profile
            </NavLink>
            <NavLink exact activeClassName = "active_class" to="/YourDoctors">
                Your Doctors
            </NavLink>
            <NavLink exact activeClassName = "active_class" to="/Schedule">
                Schedule
            </NavLink>
            <NavLink exact activeClassName = "active_class" to="/MedicalRecords">
                Medical records
            </NavLink>
            <NavLink exact activeClassName = "active_class" to="/Contact">
                Contact
            </NavLink>
            <br/>
        </div>
        </>
    );
};

export default Menu;