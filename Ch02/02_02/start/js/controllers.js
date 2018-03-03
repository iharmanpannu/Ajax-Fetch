angular.module('listApp', [])
    .controller('ListController', ['$http', function ($http) {
        $http.get('https://www.eventbriteapi.com/v3/events/search/?token=K3WIYUKJBMKJAKZADRGG&location.address=seattle+usa')
            .then(function (data) {
                console.log(data)
            })
    }])