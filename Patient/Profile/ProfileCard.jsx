import React from 'react';

function ProfileCard(props){
    return (
      <>
      <table id="profile_id">
        <tr>
            <td class="profile_prop">Full name</td>
            <td class="profile_value">Maria Anders</td>
        </tr>
        <tr>
            <td class="profile_prop">Email</td>
            <td class="profile_value">abc@gmail.com</td>
        </tr>
        <tr>
            <td class="profile_prop">Contact number</td>
            <td class="profile_value">456789325</td>
        </tr>
        <tr>
            <td class="profile_prop">Assigned doctor id</td>
            <td class="profile_value">152</td>
        </tr>
        <tr>
            <td class="profile_prop">Living Area</td>
            <td class="profile_value">Washington</td>
        </tr>
        <tr>
            <td class="profile_prop">Age</td>
            <td class="profile_value">23</td>
        </tr>
        <tr>
            <td class="profile_prop">Weight</td>
            <td class="profile_value">56</td>
        </tr>
        <tr>
            <td class="profile_prop">Height</td>
            <td class="profile_value">5'8"</td>
        </tr>
        <tr>
            <td class="profile_prop">Blood group</td>
            <td class="profile_value">AB+</td>
        </tr>
    </table>
    </>
    );
  }

  export default ProfileCard; 