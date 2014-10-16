function testCtrlOne($scope){
    $scope.name = 'Farhan'
    $scope.itemsList = [
        {title:'Farhan'},
        {title:'Furqan'},
        {title:'Ijlal'},
        {title:'umair'}

    ];
    $scope.addItems = function(){
        if(!$scope.newItem) return;
        $scope.itemsList.push({title:$scope.newItem});
        $scope.newItem = '';
    }
}
function testCtrlTow($scope){
    $scope.name = 'Khanzada'
}

(function(){
    var app =angular.module('bookStore', []);

    app.controller('bookShop', function(){
        this.product = gem;
    });

    app.controller('PanelController', function(){
        this.tab = 1;
    });

    var gem = [
        {
            name:'JavaScript',
            price:'500',
            dec:'This is a JavaScript book',
            canPer:false,
            image:[
                {
                    full:'product.jpg'
                }
            ]
        },
        {
            name:'jQuery',
            price:'600',
            dec:'This is a jQuery book',
            canPer:true,
            image:[
                {
                    full:'product.jpg'
                }
            ]
        },
        {
            name:'Angular',
            price:'1000',
            dec:'This is a Angular book',
            canPer:true,
            image:[
                {
                    full:'product.jpg'
                }
            ]
        }
    ]

})();


