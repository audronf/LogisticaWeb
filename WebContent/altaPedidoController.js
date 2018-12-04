var app = angular.module('myApp', []).controller('altaPedidoController',
		altaPedidoController);

app.config(['$httpProvider', function ($httpProvider) {
	  //Reset headers to avoid OPTIONS request (aka preflight)
	  $httpProvider.defaults.headers.common = {};
	  $httpProvider.defaults.headers.post = {};
	  $httpProvider.defaults.headers.put = {};
	  $httpProvider.defaults.headers.patch = {};
	}]);

function altaPedidoController($scope, $http, $window) {
		
	$scope.altaPedido = function() {
		$http({
			
			method : 'GET',
//			url : 'http://localhost:8081/consultarPedido/'+ $scope.codigoSeguimiento,
//			url : 'http://192.168.1.34:8081/consultarPedido/'+ $scope.codigoSeguimiento,
//			url : 'http://192.168.1.87:8081/consultarPedido/'+ $scope.codigoSeguimiento,

//			url : 'http://192.168.1.135:8081/consultarPedido/'+ $scope.codigoPedido,
			url : 'https://38e4736b.ngrok.io/pedido/'+ $scope.codigoPedido,

		}).then(function successCallback(response) {
			$scope.pedido = response.data;
			
			$http({
				method: 'POST',
				url: 'http://192.168.0.6:8081/altaPedido/',
				data: $scope.pedido
			})
		}
		
	)};

}