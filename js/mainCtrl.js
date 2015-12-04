app.controller('mainCtrl', function($scope, ngDialog) {
  $scope.openPopUp = function () {
        ngDialog.open({
          template: 'mosaic'
        });
    };
});
