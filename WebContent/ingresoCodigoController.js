var app = angular.module('myApp', []).controller('ingresoCodigoController',
		['$scope', '$http'/*, '$state'/*,'ui.router'*/, '$window', ingresoCodigoController]);

function ingresoCodigoController($scope, $http, $window/*, $state*/) {

	$scope.consultarCodigo = function() {
//		$http(
//				{
//					method : 'GET',
//					url : 'http://localhost:8081/consultarPedido/'
//							+ $scope.codigoSeguimiento,
//				}).then(function successCallback(response) {
					
//			localStorage['estado'] = response.data;
			localStorage['codigoPedido'] = $scope.codigoSeguimiento;
					
			$window.location.href = 'http://localhost:8080/Web/consultaPedido.html';
			
			
//			$location.url('http://localhost:8080/Web/consultaPedido.html');
//			$state.go("/consultaPedido.html", {
//				pedido : $scope.pedido
//			});

//		});
	}

};