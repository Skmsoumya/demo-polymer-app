Polymer({
	is: "demo-offer-page",

	properties: {
		title: {
			type: String,
			observer: "observe"
		},

		description: {
			type: String
		},

		backimage: {
			type: String
		}
	},

	observe:  function() {
		console.log(this.backimage);
	}
});