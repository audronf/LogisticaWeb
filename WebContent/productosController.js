var app = angular.module('myApp', []).controller('productosController',
		productosController);

function productosController($scope, $filter, $http) {

	$http({
		  method: 'GET',
		  url: 'http://localhost:8081/dvl/productos'
		}).then(function successCallback(response) {
		    $scope.productos = response.data;
		  });
	
	$scope.carrito = [];

	$scope.resetearCarrito = function() {
		$scope.carrito.length = 0;
	}

	$scope.agregarProducto = function(pIndex, cantidad) {
		if (cantidad > 0) {
			try {
				var codProducto = $scope.productos[pIndex].codDeBarras
				var index = -1;
				$scope.carrito.some(function(obj, i) {
					return obj.codDeBarras === codProducto ? index = i : false;
				});
			} catch (err) {
			}
			;

			if (index != -1 && index != undefined) {
				$scope.carrito[index].cantidad = $scope.carrito[index].cantidad
						+ cantidad;
			} else {
				$scope.carrito.push({
					"codDeBarras" : $scope.productos[pIndex].codDeBarras,
					"descripcion" : $scope.productos[pIndex].descripcion,
					"cantidad" : cantidad
				});
			}
		}
	};

	$scope.quitarProducto = function(pcIndex) {
		$scope.carrito.splice(pcIndex, 1);
	};

}