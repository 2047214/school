angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listProducts=[
        {id:'101',name:'Mrs.MALINI',price:89001,quantity:34},
        {id:'102',name:'Mr.YOGESH',price:98001,quantity:30},
        {id:'103',name:'Miss.PAVIKA',price:69540,quantity:28},
        {id:'104',name:'Mrs.KARTHIKA',price:87541,quantity:45},
        {id:'105',name:'Mr.DHILIP',price:78000,quantity:51},
        {id:'106',name:'Mr.ADEN',price:76890,quantity:28},
        {id:'107',name:'Miss.ZENIA FATHIMA',price:59540,quantity:33},
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listProducts[index].name=$scope.name;
        $scope.listProducts[index].price=$scope.price;
        $scope.listProducts[index].quantity=$scope.quantity;
    }
    $scope.add=function()
    {
        $scope.listProducts.push({
            id:$scope.id,name:$scope.name,price:$scope.price,quantity:$scope.quantity
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listProducts.length;i++)
        if($scope.listProducts[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProducts[index];
        $scope.id=product.id;
        $scope.name=product.name;
        $scope.price=product.price;
        $scope.quantity=product.quantity;
    }
    $scope.delete=function()
    {
        var result=confirm('ARE YOU SURE?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listProducts.splice(index,1);
        }
    };
});