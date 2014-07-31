sdApp.controller('EditSeriesDetailCtrl', function ($scope, $routeParams, series, tracks) {


    tracks.list(function (tracks) {
        $scope.tracks = tracks;
    });

    series.list(function (series) {
        $scope.series = series;
    });

    series.find($routeParams.seriesId, function (selectedSeries) {

        $scope.selectedSeries = selectedSeries;


    });

    trackNames = [];
    trackOwned = [];

    for (var key in $scope.selectedSeries.trackIds) {

        trackId = $scope.selectedSeries.trackIds[key];
        tracks.find(trackId, function (track) {
            trackNames.push(track.name);
            trackOwned.push(track.owned);
        });
    }

    $scope.trackNames = trackNames;
    $scope.trackOwned = trackOwned;

    $scope.ownedTracksInSeriesCount = function () {
        var count = 0;
        angular.forEach($scope.tracks, function (track) {
            if (track.owned == true) {
                count++;
            }

        });
        return count;
    }


});