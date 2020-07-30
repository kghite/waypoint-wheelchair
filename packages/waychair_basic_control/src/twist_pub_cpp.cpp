#include <ros/ros.h>
#include <geometry_msgs/Twist.h>
#include <stdlib.h>

/*
Example twist publisher in C++
Compare to twist_pub_python.py
*/
int main(int argc, char**argv){
	// Create publisher
	ros::init(argc, argv, "twist_pub_cpp");
	ros::NodeHandle nh;

	ros::Publisher pub = nh.advertise<geometry_msgs::Twist>("waychair/base_controller/cmd_vel", 1000);

	// Cycle publisher
	ROS_INFO_STREAM("Sending forward velocity command via cpp");
	ros::Rate rate(10);
	
	while(ros::ok()) {
		// Fill twist msg
		geometry_msgs::Twist msg;
		msg.linear.x = 0.1;

		pub.publish(msg);

		rate.sleep();
	}
}