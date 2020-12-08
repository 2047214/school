angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listTeachers=[
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
        $scope.listTeachers[index].name=$scope.name;
        $scope.listTeachers[index].price=$scope.price;
        $scope.listTeachers[index].quantity=$scope.quantity;
    }
    $scope.add=function()
    {
        $scope.listTeachers.push({
            id:$scope.id,name:$scope.name,price:$scope.price,quantity:$scope.quantity
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listTeachers.length;i++)
        if($scope.listTeachers[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var product=$scope.listProducts[index];
        $scope.id=teacher.id;
        $scope.name=teacher.name;
        $scope.price=teacher.price;
        $scope.quantity=teacher.quantity;
    }
    $scope.delete=function()
    {
        var result=confirm('ARE YOU SURE?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listTeachers.splice(index,1);
        }
    };
});