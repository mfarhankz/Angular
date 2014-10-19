(function(){
    angular.module('GuitarApp', ['ngRoute'])

    .controller('ListController',function($scope,$http){
        $http.get('app/acoustic.json').success (function(data){
            $scope.guitarVariable = data;
            $scope.orderGuitar = 'price';
        });
    })
    .controller('ListControllerTow',function($scope,$http){
        $http.get('app/electric.json').success (function(data){
            $scope.guitarVariable = data;
            $scope.orderGuitar = 'price';
        });
    })

    .controller('ListControllerThree',function($scope,$http){
        $http.get('app/bass.json').success (function(data){
            $scope.guitarVariable = data;
            $scope.orderGuitar = 'price';
        });
    })
    .controller('ListControllerFour',function($scope,$http){
        $http.get('app/luq.json').success (function(data){
            $scope.guitarVariable = data;
            $scope.orderGuitar = 'price';
        });
    })

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/acoustic-guitar', {
                    templateUrl: 'app/templates/list.html',
                    controller: 'ListController'
                }).
                when('/electric-guitar', {
                    templateUrl: 'app/templates/list.html',
                    controller: 'ListControllerTow'
                }).
                when('/bass-guitar', {
                    templateUrl: 'app/templates/list.html',
                    controller: 'ListControllerThree'
                }).
                when('/luq-guitar', {
                    templateUrl: 'app/templates/list.html',
                    controller: 'ListControllerFour'
                }).
                otherwise({
                    redirectTo: '/acoustic-guitar'
                });
        }]);

})();