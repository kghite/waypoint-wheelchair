/**
 * Connect to ROS on page load
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
}

/**
 * Send teleop commands on page button presses
 */
function sendTeleop(direction){
	var teleopX = 0;
	var teleopZ = 0;

	var cmdTopic = new ROSLIB.Topic({
		ros : ros,
		name : '/waychair/base_controller/cmd_vel',
		messageType : 'geometry_msgs/Twist'
	});

	switch (direction) {
		case "l":
			teleopZ = 1;
			break;
		case "f":
			 teleopX = .5;
			break;
		case "r":
			teleopZ = -1;
			break;
		case "b":
			teleopX = -.5;
			break;
		case "s":
			break;
		}

	var twistMsg = new ROSLIB.Message({
		linear : {
			x : teleopX,
			y : 0,
			z : 0
		},
		angular : {
			x : 0,
			y : 0,
		 	z : teleopZ
		}
	});

	cmdTopic.publish(twistMsg);
}