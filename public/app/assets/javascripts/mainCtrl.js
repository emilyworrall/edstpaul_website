app.controller('mainCtrl', function($scope, ngDialog) {
  $scope.openPopUp = function () {
    ngDialog.open({
      template: 'showreel'
    });
  };

  $scope.openPopUp2 = function () {
    ngDialog.open({
      template: 'm1'
    });
  };
});
