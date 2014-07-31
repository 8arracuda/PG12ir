sdApp.controller('SeriesDetailCtrl', function ($scope, $routeParams, series, tracks) {

        tracks.list(function (tracks) {
            $scope.tracks = tracks;
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
        $scope.trackCompleted = $scope.selectedSeries.trackCompleted;


        $scope.ownedTracksInSeriesCount = function () {
//            var count = 0;
//
//            angular.forEach($scope.selectedSeries.trackIds, function (trackId) {
//                angular.forEach($scope.tracks, function (track) {
//                    if (track.id == trackId) {
//                        if (track.owned) {
//                            count++;
//                        }
//                    }
//                });
//            });
//            return count;
            return 'todo';
        }



        $scope.changeToCompleted = function (trackId) {
            $scope.selectedSeries.trackCompleted[trackId] = true;
        };

        $scope.changeToNotCompleted = function (trackId) {
            $scope.selectedSeries.trackCompleted[trackId] = false;
        };

        $scope.setAsFavorite = function() {
          $scope.selectedSeries.isFavorite= true;
        };

        $scope.removeFavorite = function() {
            $scope.selectedSeries.isFavorite= false;
        };

    }
)
;