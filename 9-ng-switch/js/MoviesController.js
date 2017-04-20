function MoviesController() {
	this.favorites = [{
		title: "Enemy State",
		year: 1999,
		popular: true,
		category: "action"
	},
	{
		title: "Limitless",
		year: 2013,
		popular: true
	},
		{
		title: "The Perkins Being in a wall flower",
		year: 2014,
		popular: false,
		category: "fantasy"
	}];
}

angular.module("app").controller("MoviesController", MoviesController);
