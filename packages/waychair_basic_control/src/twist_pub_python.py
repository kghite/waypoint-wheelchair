#!/usr/bin/env python

"""
Example twist publisher in python
Compare to twist_pub_c++.cpp
"""

import sys
import rospy
from geometry_msgs.msg import Twist

def publish_twist_msgs():
	# Create publisher
	vel_pub = rospy.Publisher('/waychair/base_controller/cmd_vel', Twist, queue_size=10)
	rospy.init_node('twist_pub_python', anonymous=True)

	# Fill twist msg
	msg = Twist()
	msg.linear.x = 0.1

	# Cycle publisher
	rate = rospy.Rate(10)
	rospy.loginfo('Sending forward velocity command via python')
	while not rospy.is_shutdown():
		vel_pub.publish(msg)
		rate.sleep()

if __name__ == '__main__':
	if len(sys.argv) == 1:
		try:
			publish_twist_msgs()
		except rospy.ROSInterruptException as e:
			print('twist_pub_python: ', e)

		else:
			print("Usage: rosrun waychair_basic_control twist_pub_python")