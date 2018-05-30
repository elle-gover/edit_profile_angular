"use strict";

const userProfile = {
    template: `
        <div class="profile">
            <h2>My Profile</h2>
            <h4>Name</h4>
            <h5>Contact Info</h5>
            <h5>Bio</h5>
            <button type="button">Edit</button>
        </div>
    `,
   controller: ["ProfileService", function(ProfileService) {
       const vm = this;

   }
   ]



}





angular
    .module("app", [])
    .component("userProfile", userProfile);