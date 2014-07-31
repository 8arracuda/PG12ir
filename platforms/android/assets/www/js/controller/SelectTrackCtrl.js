sdApp.controller('SelectTrackCtrl', function ($scope, $routeParams, series, tracks) {

    $scope.weekNumber = $routeParams.weekNumber-1;

    series.find($routeParams.seriesId, function (selectedSeries) {
        $scope.selectedSeries = selectedSeries;

    });

    tracks.list(function (tracks) {
        $scope.tracks = tracks;
    });


    $scope.selectTrack = function(trackId) {
        $scope.selectedSeries.trackIds[$scope.weekNumber]=trackId;
    };

});