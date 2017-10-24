var app = angular.module('unsplashApp', ["ui.router"]);

app.config(function($stateProvider) {
    var detailsState = {
        name: 'details',
        url: 'details',
        templateUrl: '../details.html',
        controller: 'unsplashCtrl'
    }

    $stateProvider.state(detailsState);
});

app.controller('unsplashCtrl', function unsplashCtrl($scope, $http) {
    
    var pageNum = 1;

    $scope.getPage = function (){
        $http({
            method: "GET",
            url: "https://api.unsplash.com/photos/?page=" + pageNum + "&client_id=99ab3726f51790918578fcbab308f1191c07f8e4ae37a7bd71b31e28276f8313"
        }).then(function successResp(response) {
            $scope.images = response.data;
            console.log(response.data);
        }, function errorResp(response) {
            console.log(response);
        });
    };

    $scope.getPage();

    $scope.showDetails = function(image) {
        $scope.details = image;
    }

    $scope.prevPage = function() {
        if (pageNum > 1){
            pageNum--;
            $scope.getPage();
        }
    }

    $scope.nextPage = function() {
        if (pageNum <= 346){
            pageNum++;
            $scope.getPage();
        }
    }
});
