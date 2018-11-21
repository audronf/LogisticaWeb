var app = angular.module('myApp', []).controller('consultaPedidoController',
		consultaPedidoController);

function consultaPedidoController($scope, $http, $window) {
	
	$scope.latitud = -34.6170941;
	$scope.longitud = -58.3820478;
	
	$scope.codigoSeguimiento = localStorage['codigoPedido'];
	
	$scope.init = function() {
		$http({
			
			method : 'GET',
			url : 'http://localhost:8080/consultarPedido/'+ $scope.codigoSeguimiento,
		}).then(function successCallback(response) {
			$scope.pedido = response.data;
		}
		
	)};
	
    $scope.initialize = function() {
        $scope.map = new google.maps.Map(document.getElementById('map_div'), {
           center: {lat: $scope.latitud, lng: $scope.longitud},
           zoom: 16
        });
        
        var marker = new google.maps.Marker({
    	    position: {lat: $scope.latitud, lng: $scope.longitud},
    	    map: $scope.map,
    	    title: "Ubicación distribuidor"
    	});
     }
     
     google.maps.event.addDomListener(window, 'load', $scope.initialize);
     
    

}