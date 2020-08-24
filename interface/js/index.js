/**
 * Publish life to the /app topic on page load.
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

	// Publish life check
	var safetyCheck = new ROSLIB.Topic({
		ros : ros,
		name : '/app',
		messageType : 'std_msgs/Int8'
	});

	var check = new ROSLIB.Message({
		data : 1
	});
	safetyCheck.publish(check);
}