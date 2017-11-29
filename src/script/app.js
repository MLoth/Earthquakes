'use strict';

var endpoint = 'https://api.spotify.com/v1/search?type=artist&q=',
	token = 'BQBa1ScirSkeIypiMTiO66qatrUcTUaPA4MlGABqvk-Sj6b2dacwKPm0QFsk8zjEotjDAkbQ9PxXesse-KM';

var folHolder = document.querySelector('.followers'),
	animated = document.querySelector('.animated'),
	animatedLevel2 = document.querySelector('.animated--level2');

function fillFactSheet( artist ) {
	if ( artist ) {
		animated.classList.replace( 'animated', 'fadeIn' );
		console.log(artist);

		folHolder.innerHTML = artist.followers.total;

		var genres = '';
		for (var i = 0; i < genres.length; i++) {
			genres += '<span class="genre fadeIn">' + genres[i] + '</span>';
		}
		console.log( genres );
		// name.innerHTML = artist.followers.total;
	} else {
		// toggle invisible
	}
}

function callTheApi( a ) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var r = JSON.parse( this.responseText ).artists.items[0];
			fillFactSheet( r );
		} else if ( this.status == 401 ) {
			console.error( 'An authentication error occured.' );
		}
	};
	xhttp.open('GET', endpoint + a, true);
	xhttp.setRequestHeader('Authorization', 'Bearer ' + token );
	xhttp.send();
}

document.addEventListener('DOMContentLoaded', function() {
	var i = document.querySelector('.main--input');

	i.addEventListener('change', function() {
		callTheApi( i.value );
	});
});