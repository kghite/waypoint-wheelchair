#! /usr/bin/env python

"""
Flask app for Waypoint Wheelchair control
Served by the chair machine
"""

import os
import rospy
import threading

from flask import Flask, render_template

from std_msgs.msg import UInt32

def ros_callback(msg):
	print(msg)

threading.Thread(target=lambda: rospy.init_node('example_node', disable_signals=True)).start()
rospy.Subscriber('/listener', UInt32, ros_callback)
pub = rospy.Publisher('/talker', UInt32, queue_size=10)

app = Flask(__name__)


"""
Main Page
"""
@app.route('/')
def base():
	msg = UInt32()
	msg.data = 1
	pub.publish(msg)

	return render_template('index.html')


"""
Support Page
"""
@app.route('/support')
def support():
	return 'support mode'


"""
Helping Hand Page
"""
@app.route('/helpinghand')
def helpinghand():
	return 'helping hand mode'


"""
Let's Go Page
"""
@app.route('/letsgo')
def letsgo():
	return 'let\'s go mode'


if __name__ == '__main__':
	app.run(host=os.environ['ROS_IP'], port=3000)