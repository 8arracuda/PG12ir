sdApp.controller('TracksListCtrl', function ($scope, tracks) {


    tracks.list(function (tracks) {
        $scope.tracks = tracks;
    });

    $scope.selection = [];

    $scope.selectedTracks = function selectedTracks() {
        return filterFilter($scope.tracks, { owned: true });
    };

    $scope.$watch('tracks|filter:{owned:true}', function (nv) {
        $scope.selection = nv.map(function (track) {
            return track.name;
        });
    }, true);


    $scope.saveTracks = function () {
        localStorage.setItem('tracks', JSON.stringify($scope.tracks));
    };

    $scope.loadTracksFromLocalStorage = function () {

        if (localStorage.getItem('tracks') == null) {
            alert('no data saved in localStorage');
        }

        $scope.tracks = JSON.parse(localStorage.getItem('tracks'));
    };

//    $scope.loadDefaultsForTrack = function (tracks) {
//        tracks.list(function (tracks) {
//            $scope.tracks = tracks;
//        });
//    };

    $scope.loadDefaultsForTrack = function () {
        tracks.list(function (tracks) {
            $scope.tracks = tracks;
        });
    };

    $scope.ownedTracksInSeriesCount = function () {
        var count = 0;
        angular.forEach($scope.tracks, function (track) {
            if (track.owned == true) {
                count++;
            }
        });
        return count;
    };

    $scope.removeTracksFromLocalStorage = function() {

        localStorage.removeItem('tracks');
    };

});