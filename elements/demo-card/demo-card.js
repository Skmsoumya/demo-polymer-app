Polymer({
	is: "demo-card",

	properties: {
		id: {
			type: Number
		},

		title: {
			type: String
		},

		link: {
			type: String
		},

		description: {
			type: String,
			observer: "shortenDescription"
		},

		pageno: {
			type: Number,
			notify: true
		},

		offerpageindex: {
			type: Number
		},

		productimage: {
			type: String
		}
	},

	shortenDescription: function() {
		this.description = this.description.substring(0,200);
	},

	openOfferPage: function() {
		console.log("tapped");
		this.pageno = this.offerpageindex + 3;
		console.log(this.pageno);
	}
})