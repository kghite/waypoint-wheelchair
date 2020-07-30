# Waypoint Wheelchair

The Waypoint Wheelchair is a practical mobile robot implementation utilizing ROS.  Autonomous and collaborative navigation functionality is demonstrated for wheelchair use cases in a school setting.

**Components**

* Navigation System (C++, ROS) - Control platform providing mapping, localization, navigation, behavior planning, etc. - remote machine
* User Interface (Rust, Vue.js) - Adaptive app interface for navigation control - remote tablet
* Chair Interface (Python, Native Motor Control) - Non-invasive, low-level chair control and safety functions - onboard machine

## What can it do?

**Let's Go**

Let's Go mode provides waypoint navigation for the user with customizable, adaptive destination controls.  Given a map with labeled location pins created in Support mode, the user can choose a destination for fully autonomous navigation such as a restroom or classroom in a school environment.

**Helping Hand**

Helping Hand mode provides a safety net for users alongside their native chair controller.  Controller inputs are edited by the system in an intelligent manner designed to prevent potentially dangerous behavior such as running into obstacles and tuned to feel additive rather than frustrating to the user experience.

**Support**

Support mode provides an interface for adjusting settings, creating maps for Let's Go mode, and personalizing input formats - with no technical background required.

## How does it work?

* System Graph
* ROS Topic Map
* Mission Logic

## What's next?

* Low cost hardware version
* Improved collaborative navigation
* Replace ROS path planning with node optimized for pedestrian interaction