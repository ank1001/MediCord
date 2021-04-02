import React from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import SignIn from '../../SignIn'

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
            <NavLink exact activeClassName = "active_class" to="/SignIn">
            SignOut
            </NavLink>
            
        </div>
        </>
    );
};

export default Menu;