sdApp.controller('ExportCtrl', function ($scope, tracks, series, vehicles) {

    $scope.seriesStringForImport = "";

    series.list(function (series) {
        $scope.seriesString = JSON.stringify(series);
    });

    tracks.list(function (tracks) {
        $scope.tracksString = JSON.stringify(tracks);
    });

    vehicles.list(function (vehicles) {
        $scope.vehiclesString = JSON.stringify(vehicles);
    });


    $scope.importSeries = function () {

        $.ajax({
            url: "/series.json",
            dataType: "json",
            success: function(response) {
                $scope.series = response;
                alert($scope.series.length + ' series imported');
            }
        });

    };

    $scope.importSeriesTest = function () {

        var jsonString = '[{"id":"0","name":"Skip Barber Racing Series","trackIds":[43,55,40,45,35,7,16,38,56,59,39,15],"trackCompleted":[false,false,false,false,false,false,false,false,false,false,false,false],"$$hashKey":"01A"},{"id":"1","name":"foo Series","trackIds":[5,7,1,1,1,1,1,1,1,1,1,1],"trackCompleted":[false,false,false,false,false,false,false,false,false,false,false,false],"$$hashKey":"047"}]';
        var i = JSON.parse(jsonString);
        alert(i);
        $scope.series = i;
        alert($scope.series.length + ' series imported');

    };

});