var app = angular.module('aboutApp', []);

//token:ba2fdac7c262d7b8b81f5065c5d96bd91e22801b

function aboutControl($scope) {
	$.ajax
	({
	  type: "GET",
	  url: "https://api.github.com/repos/peiliangz/Capstone-2015/collaborators",
	  dataType: 'json',
	  async: true,
	  headers: {
	    "Authorization": "token ba2fdac7c262d7b8b81f5065c5d96bd91e22801b"
	  },
	  success: function (data){
	    alert(data[0]["login"]);
	    data.forEach (function(element, index, array) {
	    	
	    });
	  }
	});
}

app.controller('aboutControl', aboutControl);

