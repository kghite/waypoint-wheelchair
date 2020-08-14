#!/bin/bash

# Start ROS
export ROS_IP=kghite.local
roscore &

# Start flask app
python app/app.py &
chromium http://kghite.local:3000

# Start simulator

# Start controller

echo Running wheelchair demo