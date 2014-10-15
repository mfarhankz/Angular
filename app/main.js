function testCtrlOne($scope){
    $scope.name = 'Farhan'
    $scope.itemsList = [
        {title:'Farhan'},
        {title:'Furqan'},
        {title:'Ijlal'}
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