var module = angular.module('myApp');
app.controller('adventureFinderController', function($scope, spotsModel) {
    $scope.kitesurfing = spotsModel.getKiteSurfingSpotsModel();
});