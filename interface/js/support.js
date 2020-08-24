/**
 * Setup all visualization elements when the page is loaded.
 */
function init() {
	// Connect to ROS
	var ros = new ROSLIB.Ros({
		url : 'ws://localhost:9090'
	});

	ros.on('connection', function() {
		console.log('Connected to websocket server.');
		alert("Successfully connected to Waychair server.");
	});

	ros.on('error', function(error) {
		console.log('Error connecting to websocket server: ', error);
	});

	ros.on('close', function() {
		console.log('Connection to websocket server closed.');
	});

	// Create the main viewer.
	var viewer = new ROS2D.Viewer({
		divID : 'map',
		width : 600,
		height : 500
	});

	// Setup the map client.
	var gridClient = new ROS2D.OccupancyGridClient({
		ros : ros,
		rootObject : viewer.scene,
		continuous: true
	});
	// Scale the canvas to fit to the map
	gridClient.on('change', function(){
		viewer.scaleToDimensions(gridClient.currentGrid.width, gridClient.currentGrid.height);
	});
}