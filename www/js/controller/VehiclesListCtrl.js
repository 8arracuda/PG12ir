sdApp.controller('VehiclesListCtrl', function ($scope, vehicles, vehiclesDefault, $http) {


    vehicles.list(function (vehicles) {
        $scope.vehicles = vehicles;
    });

    vehiclesDefault.list(function (vehiclesDefault) {
        $scope.vehiclesDefault = vehiclesDefault;
    });

    $scope.saveVehicles = function() {
        localStorage.setItem('vehicles', JSON.stringify($scope.vehicles));
        localStorage.setItem('vehiclesDefault', JSON.stringify($scope.vehiclesDefault));
    };

    $scope.updateVehiclesFromJSON = function() {
        $http.get('vehicles.json').
            success(function (data) {
                $scope.vehicles = data;
            }).
            error(function (data, status, headers, config) {
                console.log('error loading vehicles.json');
            });

        $http.get('vehiclesDefault.json').
            success(function (data) {
                $scope.vehiclesDefault = data;
            }).
            error(function (data, status, headers, config) {
                console.log('error loading vehiclesDefault.json');
            });
    };



});