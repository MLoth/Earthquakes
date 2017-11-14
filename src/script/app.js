function getCanvasContext() {
	var canvas = document.querySelector( '#canvas' );
	if ( canvas ) {
		ctx = canvas.getContext('2d');
		return ctx;
	} else {
		return null;
	}
}

function drawSphere( context ) {
	var color = '#eeeeee';
	// radius = /*  */

	context.strokeStyle = color;

	context.beginPath();
	context.arc(400, 300, 200, 0, Math.PI * 2, true);
	context.stroke();
	context.scale( .5, 1 );
	context.arc(400, 300, 200, 0, Math.PI * 2, true);
	context.stroke();
}

document.addEventListener('DOMContentLoaded', function() {
	var ctx = getCanvasContext();
	if ( ctx ) {
		drawSphere( ctx );
	} else {
		console.error( 'Unable to start canvas drawing ☹️.')
	}
});