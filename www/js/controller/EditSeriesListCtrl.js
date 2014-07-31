sdApp.controller('EditSeriesListCtrl', function ($scope, series) {

    series.list(function (series) {
        $scope.series = series;

    });

    $scope.addSeries = function() {

        if ($scope.series == null) {
            newSeriesId = 0;
        } else {
            newSeriesId = $scope.series.length;
        }


        var newSeries = {
            "id": newSeriesId + "",
            "name": "placeholder",
            "trackIds": [1, 1, 1, 1, 1, 1, 1 , 1, 1, 1, 1, 1],
            "trackCompleted": [false, false, false, false, false, false, false, false, false, false, false, false]
        };

        $scope.series.push(newSeries);

        //alert($scope.series.length);

//        "id": "1",
//            "name": "Skip Barber Racing Series",
//            "trackIds": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//            "trackCompleted": [false, false, false, false, false, false, false, false, false, false, false, false]

    };

    $scope.initSeries = function() {

        $scope.series = [
        {
            "id": "0",
            "name": "Skip Barber Racing Series",
            "trackIds": [43, 55, 40, 45, 35, 7, 16, 38, 56, 59, 39, 15],
            "trackCompleted": [false, false, false, false, false, false, false, false, false, false, false, false]

       }
    ];

    }

    $scope.saveSeries = function() {

        localStorage.setItem('series', JSON.stringify($scope.series));
        alert('saved');

    };

    $scope.alertString = function(seriesId) {
        alert(JSON.stringify($scope.series[seriesId]));
    }

});