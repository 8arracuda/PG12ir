sdApp.controller('SeasonsListCtrl', function ($scope) {

    $scope.seasons = [
        {
            "name": "2014 Season 1",
            "active": "FALSE"
        }
    ];


    $scope.justAlert = function () {
        alert('foo');
    };

    $scope.seasonsStringify = function () {
        alert(JSON.stringify($scope.seasons));
    };

    $scope.loadSeasonsFromWeb = function () {
        //alert('Warning - all progress will be deleted!');

        $.ajax({
            type: "GET",
            url: "http://c.raceplanner.de/PG06/seasons.json",
            data: "json",
            success: function (data) {
                $scope.seasons = JSON.parse(data);
            }
        });


    };


});