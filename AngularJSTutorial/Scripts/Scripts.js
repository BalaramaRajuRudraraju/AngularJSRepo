/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", []).controller("myController", function ($scope) {
    $scope.country = {
        name: "Balarama",
        capital: "Rudraraju",
        flag: "/Images/TV.gif"
    };
});