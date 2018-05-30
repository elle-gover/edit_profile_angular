"use strict";

const editProfile = {
    template: `
        <form on-submit="">
            <input type="text" placeholder="Your name" ng-model=""></input>
            <input type="text" placeholder="Phone number" ng-model=""></input>
            <input type="text" placeholder="A short bio" ng-model=""></input>
            <button type="button">Update</button>
        </form>
    `



}









angular
    .module("app", [])
    .component("editProfile", editProfile);