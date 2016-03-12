Polymer({
	is: "demo-data",

	ready: function() {
		this.getData();
	},

	handleResponse: function(event) {
		console.log(event.detail.response);
	},

	getData: function() {
		this.$.caller.generateRequest();
	}

});