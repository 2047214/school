angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listTeachers=[
        {id:'101',name:'Mrs.MALINI',salary:89001,age:34},
        {id:'102',name:'Mr.YOGESH',salary:98001,age:30},
        {id:'103',name:'Miss.PAVIKA',salary:69540,age:28},
        {id:'104',name:'Mrs.KARTHIKA',salary:87541,age:45},
        {id:'105',name:'Mr.DHILIP',salary:78000,age:51},
        {id:'106',name:'Mr.ADEN',salary:76890,age:28},
        {id:'107',name:'Miss.ZENIA FATHIMA',salary:59540,age:33},
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listTeachers[index].name=$scope.name;
        $scope.listTeachers[index].price=$scope.salary;
        $scope.listTeachers[index].quantity=$scope.age;
    }
    $scope.add=function()
    {
        $scope.listTeachers.push({
            id:$scope.id,name:$scope.name,salary:$scope.salary,age:$scope.age
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
        var teacher=$scope.listTeachers[index];
        $scope.id=teacher.id;
        $scope.name=teacher.name;
        $scope.salary=teacher.salary;
        $scope.age=teacher.age;
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