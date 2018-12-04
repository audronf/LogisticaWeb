var app = angular.module('myApp', []).controller('consultaPedidoController',
		consultaPedidoController);

function consultaPedidoController($scope, $http, $window) {
	
	$scope.codigoSeguimiento = localStorage['codigoPedido'];
	
	$scope.init = function() {
		$http({
			
			method : 'GET',
//			url : 'http://localhost:8081/consultarPedido/'+ $scope.codigoSeguimiento,
//			url : 'http://192.168.1.34:8081/consultarPedido/'+ $scope.codigoSeguimiento,
//			url : 'http://192.168.1.87:8081/consultarPedido/'+ $scope.codigoSeguimiento,

			url : 'http://192.168.1.135:8081/consultarPedido/'+ $scope.codigoSeguimiento,

		}).then(function successCallback(response) {
			$scope.pedido = response.data;
		}
		
	)};

}