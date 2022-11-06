(function() {
    'use strict';
  
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.menu = "";
      $scope.message = "";
      $scope.checkStatus = "";
  
      $scope.checkMenu = function() {
        $scope.message = "";
        var wordsCount = getCounts($scope.menu);
  
        if (wordsCount == 0) {
          $scope.message = "Please enter data first";
          $scope.checkStatus = "error";
        } else if (wordsCount <= 3) {
          $scope.message = "Enjoy!";
          $scope.checkStatus = "ok";
        } else if (wordsCount > 3) {
          $scope.message = "Too much!";
          $scope.checkStatus = "error";
        }
      };
  
      function getCounts(string) {
        string = string.trim();
        console.log(string)
        var count = 0;
  
        if (string.length > 0) {
          count = string.split(',').map(function(s) {
              return s.trim();
            }).filter(function(s) {
              return s != '';
            }).length;
        }
  
        return count;
      }
    }
  })();