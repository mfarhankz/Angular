(function(){
    angular.module('GuitarApp', ['ngRoute'])

    .controller('ListController',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[0];
        });
    })
    .controller('ListControllerTow',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[1];
        });
    })

    .controller('ListControllerThree',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[2];
        });
    })
    .controller('ListControllerFour',function($scope,$http){
        $http.get('app/data.json').success (function(data){
            $scope.guitarVariable = data[3];
        });
    })

    .controller('HeaderController',function($scope, $location){
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
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