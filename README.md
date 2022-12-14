# node-red-contrib-gamepad

## Description
Gamepad input node for node-red.

## Pre-requisites
node-red running on a linux operating system (will not work on a Windows or Mac system).

## Background
This was written for a friend to support gamepad input in node-red. It's been tested on Raspberry Pi OS using a PS4 dual-shock controller, but is otherwise not very well tested.

Provided as-is in the hope it's useful. 

It was written to his requirements, so may not do exactly what you want, but feel free to fork it, build on it, and generally do with it what you wish.

## Requirements
Requires the 'joystick' package is installed, eg:

```sudo yum install joystick```

or

```sudo apt-get install joystick```

or equivalent, depending on your system's package manager.

Gamepad should be mapped to `/dev/input/js0` in most cases - once installed, you can verify you're receiving input by running:

```jstest /dev/input/js0```

## Installation

Run the following terminal commands:

```
cd ~/.node-red
```
```
npm i https://github.com/andy-walker/node-red-contrib-gamepad.git
```
```
node-red-restart
```

## Post-installation
Once installed, the 'gamepad' node should appear in your palette in the 'function' section.

A demo flow is included in this repo in the 'examples' folder.