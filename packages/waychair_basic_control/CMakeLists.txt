cmake_minimum_required(VERSION 3.0.2)
project(waychair_basic_control)

find_package(catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  geometry_msgs
)

catkin_package()

include_directories(include ${catkin_INCLUDE_DIRS})

add_executable(twist_pub_cpp src/twist_pub_cpp.cpp)
target_link_libraries(twist_pub_cpp ${catkin_LIBRARIES})