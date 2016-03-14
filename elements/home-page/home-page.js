Polymer({
	is: "home-page",

	properties: {
		resources: {
			type: Array,
			observer: "resourceArrival"
		},
		openpageindex: {
			type: String,
			notify: true
		}
	},

	resourceArrival: function() {
		console.log(this.resources);
	}
});