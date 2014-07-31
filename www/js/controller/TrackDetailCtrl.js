sdApp.controller('TrackDetailCtrl', function ($scope, $routeParams, tracks) {

    tracks.find($routeParams.trackId, function (selectedTrack) {
        $scope.selectedTrack = selectedTrack;
    });

});