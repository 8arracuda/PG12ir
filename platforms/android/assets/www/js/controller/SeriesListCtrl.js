sdApp.controller('SeriesListCtrl', function ($scope, series, $http) {

    series.list(function (series) {
        $scope.series = series;
    });


    $scope.countFinishedRaces = function (seriesId) {


        //$scope.series[seriesId].trackCompleted;

        count = 0
        angular.forEach($scope.series[seriesId].trackCompleted, function (trackCompleted) {
            if (trackCompleted == true) {
                count++;
            }

        });
        return count;
    };

    $scope.importSeries = function () {

        $http.get('series.json').
            success(function (data) {
                $scope.series = data;
            }).
            error(function (data, status, headers, config) {
                // log error
            });

    };

    $scope.saveSeries = function () {

        localStorage.setItem('series', JSON.stringify($scope.series));

    };
});