var app = angular.module('aboutApp', []);

function fetchToken() {
	var partA = "cf960ab1";
	var partB = "965569";
	var partC = "551a91b9fb";
	var partD = "90619c84ac250e7f";
	return partA + partB + partC + partD;
}

function aboutControl($scope) {
	var token = 'token ' + fetchToken();

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
	    alert(data[0]["login"]);
	    data.forEach (function(element, index, array) {
	    	
	    });
	  },
	  failure: function (data) {
	  	alert(JSON.stringify(data) );
	  }
	});
}

app.controller('aboutControl', aboutControl);

