sdApp.controller('SelectVehiclesForSeriesCtrl', function ($scope, $routeParams, series, vehicles) {

    $scope.weekNumber = $routeParams.weekNumber-1;

    series.find($routeParams.seriesId, function (selectedSeries) {
        $scope.selectedSeries = selectedSeries;

    });

    vehicles.list(function (vehicles) {
        $scope.vehicles = vehicles;
    });




});