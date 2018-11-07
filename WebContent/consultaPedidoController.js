var app = angular.module('myApp', []).controller('consultaPedidoController',
		consultaPedidoController);

function consultaPedidoController($scope, $http, $window) {
	
	$scope.codigoSeguimiento = localStorage['codigoPedido'];
	
	$scope.init = function() {
		$http({
			
			method : 'GET',
			url : 'http://localhost:8080/consultarPedido/'+ $scope.codigoSeguimiento,
		}).then(function successCallback(response) {
			$scope.pedido = response.data;
		}
		
	)};

}