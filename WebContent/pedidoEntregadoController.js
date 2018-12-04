var app = angular.module('myApp', []).controller('pedidoEntregadoController',
		pedidoEntregadoController);

app.config(['$httpProvider', function ($httpProvider) {
	  //Reset headers to avoid OPTIONS request (aka preflight)
	  $httpProvider.defaults.headers.common = {};
	  $httpProvider.defaults.headers.post = {};
	  $httpProvider.defaults.headers.put = {};
	  $httpProvider.defaults.headers.patch = {};
	}]);

function pedidoEntregadoController($scope, $http, $window) {
		
	$scope.altaPedido = function() {
		$http({
			
			method : 'POST',
//			url : 'http://localhost:8081/consultarPedido/'+ $scope.codigoSeguimiento,
//			url : 'http://192.168.1.34:8081/consultarPedido/'+ $scope.codigoSeguimiento,
//			url : 'http://192.168.1.87:8081/consultarPedido/'+ $scope.codigoSeguimiento,

//			url : 'http://192.168.1.135:8081/consultarPedido/'+ $scope.codigoPedido,
			url : 'https://38e4736b.ngrok.io/pedidoEntregado/'+ $scope.codigoPedido
		}
	)};

}
