Polymer({
	is: "demo-app",
	ready: function() {
		this.pageNo = 0;
	},
	properties: {
		pageNo: {
			type: Number,
			notify: true,
			observer: "pageViewController"
		},

		pageName: {
			type: String
		}
	},

	pageViewController: function() {
		if(this.pageNo === 0) {
			this.pageName = "Home";
			document.querySelector("#backButton").style.visibility = "hidden";
		}

		if(this.pageNo === 1) {
			this.pageName = "About";
			document.querySelector("#backButton").style.visibility = "hidden";
		}

		if(this.pageNo === 2) {
			this.pageName = "Contact";
			document.querySelector("#backButton").style.visibility = "hidden";
		}

		if(this.pageNo > 2) {
			document.querySelector("#backButton").style.visibility = "visible";
			this.pageName = "Offer";
		}
	},

	goToHomePage: function() {
		this.pageNo = 0;
	}
});