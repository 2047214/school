angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var employees=[
        {name:'Mrs.MALINI',dob:new Date("JULY 21,1990"),gender:"FEMALE",salary:89000.988},
        {name:'Mr.YOGESH',dob:new Date("OCTOBER 02,1987"),gender:"MALE",salary:98000.740},
        {name:'Miss.PAVIKA',dob:new Date("AUGUST 14,1983"),gender:"FEMALE",salary:67540.324},
        {name:'Mr.DHILIP',dob:new Date("NOVEMBER 21,1990"),gender:"MALE",salary:78000.896},
        {name:'Mr.ADEN',dob:new Date("MAY 25,1995"),gender:"MALE",salary:76890.765},
        {name:'Miss.ZENIA FATHIMA',dob:new Date("FEBRUARY 28,1992"),gender:"FEMALE",salary:70000.00},
        {name:'Mr.PRASHANTH YADAV',dob:new Date("SEPTEMBER 12,1993"),gender:"MALE",salary:98767.080}
    ];
    console.log(employees);
    $scope.employees=employees;
    $scope.rowlimit=4;
});