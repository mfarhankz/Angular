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
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller('ReviewController', function(){
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }
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
            ],
            reviews:[
                {
                    star:5,
                    body:'I love this product',
                    author:'m.farhankx@gmail.com'
                },
                {
                    star:3,
                    body:'I Love this product',
                    author:'m.farhankx@gmail.com'
                },
                {
                    star:1,
                    body:'I heat this product',
                    author:'m.farhankx@gmail.com'
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
            ],
            reviews:[
                {
                    star:5,
                    body:'I love this product',
                    author:'m.farhankx@gmail.com'
                },
                {
                    star:3,
                    body:'I Love this product',
                    author:'m.farhankx@gmail.com'
                },
                {
                    star:1,
                    body:'I heat this product',
                    author:'m.farhankx@gmail.com'
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
            ],
            reviews:[
                {
                    star:5,
                    body:'I love this product',
                    author:'m.farhankx@gmail.com'
                },
                {
                    star:3,
                    body:'I Love this product',
                    author:'m.farhankx@gmail.com'
                },
                {
                    star:1,
                    body:'I heat this product',
                    author:'m.farhankx@gmail.com'
                }
            ]
        }
    ]

})();


