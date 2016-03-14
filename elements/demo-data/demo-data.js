Polymer({
	is: "demo-data",
	properties: {
		data: {
			type: Array,
			notify: true
		}
	},

	ready: function() {
		this.getData();
	},

	handleResponse: function(event) {
		this.data = event.detail.response;
	},

	getData: function() {
		this.$.caller.generateRequest();
	}

});