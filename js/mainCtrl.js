angular.module('devmtnTravel').controller('mainCtrl',function($scope, mainSrv, $stateParams){
  $scope.locations = mainSrv.travelInfo;


  $scope.locations.forEach(function(item){
    if (item.id === parseInt($stateParams.id)){
      $scope.bookedLoc = item;
    }

  });

});
