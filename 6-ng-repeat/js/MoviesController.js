function MoviesController() {
	this.favorites = [{
		title: "Enemy State",
		year: 1999
	},
	{
		title: "Limitless",
		year: 2013
	},
		{
		title: "The Perkins Being in a wall flower",
		year: 2014
	}];
}

angular.module("app").controller("MoviesController", MoviesController);
