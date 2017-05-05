# raspi-node-servo-demo

A simple Node/Express app to rotate a servo 0-180 (on pin 4) when it gets an AJAX POST on route /takephoto

Assumptions:
- RPi setup with NOOBS/Raspbian (Lite)
- Latest Node/NPM
- Express Generator w/ HBS views
- NPM package: pi-servo
- systemd service running: pi-blaster
