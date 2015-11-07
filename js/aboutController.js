var app = angular.module('aboutApp', []);

function fetchToken() {
	var partA = "cf960ab1";
	var partB = "965569";
	var partC = "551a91b9fb";
	var partD = "90619c84ac250e7f";
	return partA + partB + partC + partD;
}

function controlFunction($scope, $http) {
	scope = $scope;
	var token = 'token ' + fetchToken();
	//$scope.test = "ccc";

	$.ajax
	({
	  type: "GET",
	  url: "https://api.github.com/repos/peiliangz/Capstone-2015/collaborators",
	  dataType: 'json',
	  async: true,
	  headers: {
	    'Authorization': token
	  },
	  success: function (data){
	    $scope.developers = data;
	    data.forEach (function(element, index, array) {
	    	
	    });
	    $scope.$apply();
	  },
	  failure: function (data) {
	  	alert(JSON.stringify(data) );
	  }
	});
}

app.controller('aboutControl', controlFunction);

