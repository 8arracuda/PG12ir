app.initialize();

var sdApp = angular.module('sdApp', ["ngRoute", "mobile-angular-ui"]);

lsTest = '1';

sdApp.config(function ($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'start.html',
            controller: 'StartCtrl'
        }).
        when('/showSeries', {
            templateUrl: 'series-list.html',
            controller: 'SeriesListCtrl'
        }).
        when('/selectTrack/:seriesId/:weekNumber', {
            templateUrl: 'selectTrack.html',
            controller: 'SelectTrackCtrl'
        }).
        when('/selectVehicles/:seriesId/', {
            templateUrl: 'selectVehiclesForSeries.html',
            controller: 'SelectVehiclesForSeriesCtrl'
        }).
        when('/editSeries', {
            templateUrl: 'editSeries-list.html',
            controller: 'EditSeriesListCtrl'
        }).
        when('/editSeries/:seriesId', {
            templateUrl: 'editSeries-detail.html',
            controller: 'EditSeriesDetailCtrl'
        }).
        when('/series/:seriesId', {
            templateUrl: 'series-detail.html',
            controller: 'SeriesDetailCtrl'
        }).
        when('/showTracks', {
            templateUrl: 'tracks-list.html',
            controller: 'TracksListCtrl'
        }).
        when('/track/:trackId', {
            templateUrl: 'track-detail.html',
            controller: 'TrackDetailCtrl'
        }).
        when('/export', {
            templateUrl: 'export.html',
            controller: 'ExportCtrl'
        }).
        when('/showSeasons', {
            templateUrl: 'seasonsList.html',
            controller: 'SeasonsListCtrl'
        }).
        when('/showVehicles', {
            templateUrl: 'vehicles-list.html',
            controller: 'VehiclesListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });


});

sdApp.factory('vehiclesDefault', function () {

    var vehiclesDefault = [2, 19, 22, 24, 28, 35];

    return {
        list: function (callback) {
            callback(vehiclesDefault);
        }

    };

});

sdApp.factory('vehicles', function () {


    if (localStorage.getItem('vehicles') == null) {

        var vehicles = [
            {
                "id": 1,
                "name": "BMW Z4 GT3"
            },
            {
                "id": 2,
                "name": "Cadillac CTS-V Racecar"
            },
            {
                "id": 3,
                "name": "Chevrolet Corvette C6.R"
            },
            {
                "id": 4,
                "name": "Chevrolet Impala Class B"
            },
            {
                "id": 5,
                "name": "Chevrolet Impala-COT"
            },
            {
                "id": 6,
                "name": "Chevrolet Monte-Carlo SS"
            },
            {
                "id": 7,
                "name": "Chevrolet National Impala"
            },
            {
                "id": 8,
                "name": "Chevrolet Silverado"
            },
            {
                "id": 9,
                "name": "Chevrolet SS-Gen6"
            },
            {
                "id": 10,
                "name": "Dallara DW12"
            },
            {
                "id": 11,
                "name": "Dallara Indycar"
            },
            {
                "id": 12,
                "name": "Ford Fusion Gen6"
            },
            {
                "id": 13,
                "name": "Ford GT3"
            },
            {
                "id": 14,
                "name": "Ford Mustang Class B"
            },
            {
                "id": 15,
                "name": "Ford Mustang FR500S"
            },
            {
                "id": 16,
                "name": "Ford V8 Supercar"
            },
            {
                "id": 17,
                "name": "HPD ARX-01C"
            },
            {
                "id": 18,
                "name": "KIA Optima"
            },
            {
                "id": 19,
                "name": "Legends Ford 34 Coupe"
            },
            {
                "id": 20,
                "name": "Lotus 49"
            },
            {
                "id": 21,
                "name": "Lotus 79"
            },
            {
                "id": 22,
                "name": "Mazda MX5"
            },
            {
                "id": 23,
                "name": "McLaren MP4-12C GT3"
            },
            {
                "id": 24,
                "name": "Pontiac Solstice"
            },
            {
                "id": 25,
                "name": "Radical SR8"
            },
            {
                "id": 26,
                "name": "Riley Prototype"
            },
            {
                "id": 27,
                "name": "Ruf RT 12R AWD"
            },
            {
                "id": 28,
                "name": "SCAA Spec Racer Ford"
            },
            {
                "id": 29,
                "name": "Silver Crown"
            },
            {
                "id": 30,
                "name": "SK Modified"
            },
            {
                "id": 31,
                "name": "SK Tour Modified"
            },
            {
                "id": 32,
                "name": "Skip Barber  Formula 2000"
            },
            {
                "id": 33,
                "name": "Sprint Car"
            },
            {
                "id": 34,
                "name": "Star Mazda"
            },
            {
                "id": 35,
                "name": "Street Stock"
            },
            {
                "id": 36,
                "name": "Super Late Model"
            },
            {
                "id": 37,
                "name": "Toyota Camry-Gen6"
            },
            {
                "id": 38,
                "name": "Volkswagen Jetta TDI Cup"
            },
            {
                "id": 39,
                "name": "Williams-Toyota FW31"
            }
        ];

    } else {
        var vehicles = JSON.parse(localStorage.getItem('vehicles'));
    }

    return {
        list: function (callback) {
            callback(vehicles);
        },
        find: function (vehicleId, callback) {
            var selectedVehicle = vehicles.filter(function (entry) {
                return entry.id === vehicleId;
            })[0];

            callback(selectedVehicle);
        }
    };
});

sdApp.factory('series', function () {


    if (localStorage.getItem('tracks') == null) {

        var series = [
            {
                "id": "0",
                "name": "Skip Barber Racing Series",
                "trackIds": [43, 55, 40, 45, 35, 7, 16, 38, 56, 59, 39, 15],
                "trackCompleted": [false, false, false, false, false, false, false, false, false, false, false, false]

            }
        ];

    } else {
        var series = JSON.parse(localStorage.getItem('series'));
    }

    return {
        list: function (callback) {
            callback(series);
        },
        find: function (seriesId, callback) {
            var selectedSeries = series.filter(function (entry) {
                return entry.id === seriesId;
            })[0];

            callback(selectedSeries);
        }
    };
});

sdApp.factory('tracks', function () {

    if (localStorage.getItem('tracks') == null) {

        var tracks = [
            {
                "id": 1,
                "name": "Atlanta Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 2,
                "name": "Auto Club Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 3,
                "name": "Autodromo Enzo e Dino Ferrari ",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 4,
                "name": "Autodromo Jose Carlos Pace",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 5,
                "name": "Autodromo Nazionale Monza",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 6,
                "name": "Barber Motorsports Park",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 7,
                "name": "Brands Hatch",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 8,
                "name": "Bristol Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 9,
                "name": "Canadian Tire Motorsports Park",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 10,
                "name": "Centripetal Circuit",
                "owned": true,
                "price": 0
            },
            {
                "id": 11,
                "name": "Charlotte Motor Speedway",
                "owned": true,
                "price": 0
            },
            {
                "id": 12,
                "name": "Chicagoland Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 13,
                "name": "Circuit de Spa Francorchamps",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 14,
                "name": "Circuit Gilles-Villeneuve",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 15,
                "name": "Circuit of the Americas",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 16,
                "name": "Circuit Park Zandvoort",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 17,
                "name": "Circuit Zolder",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 18,
                "name": "Concord Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 19,
                "name": "Darlington Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 20,
                "name": "Daytona Circa 2007",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 21,
                "name": "Daytona International Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 22,
                "name": "Dover Intl Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 23,
                "name": "Homestead Miami Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 24,
                "name": "Indianapolis Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 25,
                "name": "Iowa Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 26,
                "name": "Irwindale Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 27,
                "name": "Kansas Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 28,
                "name": "Kentucky Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 29,
                "name": "Langley Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 30,
                "name": "Lanier National Speedway",
                "owned": true,
                "price": 0
            },
            {
                "id": 31,
                "name": "Las Vegas Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 32,
                "name": "Lime Rock Park",
                "owned": true,
                "price": 0
            },
            {
                "id": 33,
                "name": "Long Beach (Tech Track)",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 34,
                "name": "Lucas Oil Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 35,
                "name": "Mazda Raceway Laguna Seca",
                "owned": true,
                "price": 0
            },
            {
                "id": 36,
                "name": "Martinsville Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 37,
                "name": "Michigan International Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 38,
                "name": "Mid-Ohio Sports Car Course",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 39,
                "name": "Mount Panorama Circuit",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 40,
                "name": "New Hampshire Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 41,
                "name": "New Jersey Motorsports Park (Tech Track)",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 42,
                "name": "New Smyrna Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 43,
                "name": "Okayama International Circuit",
                "owned": true,
                "price": 0
            },
            {
                "id": 44,
                "name": "Oran Park Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 45,
                "name": "Oulton Park",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 46,
                "name": "Oxford Plains Speedway",
                "owned": true,
                "price": 0
            },
            {
                "id": 47,
                "name": "Phillip Island Circuit",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 48,
                "name": "Phoenix International Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 49,
                "name": "Pocono Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 50,
                "name": "Richmond International Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 51,
                "name": "Road America",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 52,
                "name": "Road Atlanta",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 53,
                "name": "Rockingham Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 54,
                "name": "Sebring International Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 55,
                "name": "Silverstone Circuit",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 56,
                "name": "Sonoma Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 57,
                "name": "South Boston Speedway",
                "owned": true,
                "price": 0
            },
            {
                "id": 58,
                "name": "Stafford Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 59,
                "name": "Summit Point Raceway",
                "owned": true,
                "price": 0
            },
            {
                "id": 60,
                "name": "Suzuka Intl Racing Course",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 61,
                "name": "Talladega Superspeedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 62,
                "name": "Texas Motor Speedway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 63,
                "name": "The Milwaukee Mile",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 64,
                "name": "Thomposn Intl Speedway",
                "owned": true,
                "price": 0
            },
            {
                "id": 65,
                "name": "Twin Ring Motegi",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 66,
                "name": "USA International Speedway",
                "owned": true,
                "price": 0
            },
            {
                "id": 67,
                "name": "Virginia International Raceway",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 68,
                "name": "Watkins Glen International",
                "owned": false,
                "price": 14.95
            },
            {
                "id": 69,
                "name": "Donington Park",
                "owned": false,
                "price": 14.95
            }
        ];
    } else {
        var tracks = JSON.parse(localStorage.getItem('tracks'));
    }

    return {
        list: function (callback) {
            callback(tracks);
        },
        find: function (trackId, callback) {
            var selectedTrack = tracks.filter(function (entry) {
                return entry.id === trackId;
            })[0];

            callback(selectedTrack);
        }

    };
});
