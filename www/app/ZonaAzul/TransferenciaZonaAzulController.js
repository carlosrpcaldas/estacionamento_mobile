app.controller('TransferenciaZonaAzulCtrl', function ($rootScope, $scope, $state, $stateParams, $filter, $ionicModal, $ionicPopup, $ionicHistory, UtilService, ComboBoxService) {
	console.log('TransferenciaZonaAzulCtrl');

	// ### INICIALIZAÇÃO DO CONTROLLER ######################################################
	//UtilService.showLoading();
	$scope.credito = {};

	var credito = $stateParams.credito;
	console.log(credito);
	if(credito){
		// $scope.credito.valor =	EstacionamentosService.getEstacionamento(estacionamentoId);
	}

	$scope.form = {
		mensagemObrigatorio:'ESTE CAMPO É OBRIGATÓRIO!',
		enviado: false
	};


});
