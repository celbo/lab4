
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render("index", {
  	"projects": [
  	    { "name": "Waiting in Line",
  	      "image": "lorempixel.people.1.jpeg",
  	      "id": "project1"
  	    },

  	    { "name": "Needlefinding",
  	      "image": "lorempixel.people.2.jpeg",
  	      "id": "project2"
  	    },

  	    { "name": "Another Project",
  	      "image": "lorempixel.technics.1.jpeg",
  	      "id": "project3"
  	    },

  	    { "name": "Dogs are Cool",
  	      "image": "lorempixel.abstract.1.jpeg",
  	      "id": "project4"
  	    },

  	    { "name": "Peterson Hall",
  	      "image": "lorempixel.abstract.8.jpeg",
  	      "id": "project5"
  	    },

  	    { "name": "UCSD Transportation",
  	      "image": "lorempixel.technics.2.jpeg",
  	      "id": "project6"
  	    },

  	    { "name": "University Centers",
  	      "image": "lorempixel.city.1.jpeg",
  	      "id": "project7"
  	    },

  	    { "name": "Cognitive Science",
  	      "image": "lorempixel.city.2.jpeg",
  	      "id": "project8"
  	    },

  	]
 });
};