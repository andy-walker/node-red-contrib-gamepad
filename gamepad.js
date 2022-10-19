module.exports = function(RED) {
    function GamepadNode(config) {
        RED.nodes.createNode(this, config);

        const node = this;
        const joystick = require('joystick');
        const gamepad = new joystick(0);
        
        gamepad.on('button', button => {
            switch (button.number) {
                case 0: // cross
                    node.send([null, null, null, null, { payload: button.value }, null, null, null, null, null]);
                    break;
                case 1: // circle
                    node.send([null, null, null, null, null, { payload: button.value }, null, null, null, null]);
                    break;
                case 2: // triangle
                    node.send([null, null, null, null, null, null, { payload: button.value }, null, null, null]);
                    break;
                case 3: // square
                    node.send([null, null, null, null, null, null, null, { payload: button.value }, null, null]);
                    break;
                case 4: // L1
                    node.send([null, null, null, null, null, null, null, null, { payload: button.value }, null]);
                    break;
                case 5: // R1
                    node.send([null, null, null, null, null, null, null, null, null, { payload: button.value }]);
                    break;       
            }
        });
        
        gamepad.on('axis', axis => {
            switch (axis.number) {
                case 0: // left stick x-axis
                    node.send([{ payload: axis.value }, null, null, null, null, null, null, null, null, null]);
                    break;
                case 1: // left stick y-axis
                    node.send([null, { payload: axis.value }, null, null, null, null, null, null, null, null]);
                    break;
                case 3: // right stick x-axis
                    node.send([null, null, { payload: axis.value }, null, null, null, null, null, null, null]);
                    break;
                case 4: // right stick y-axis
                    node.send([null, null, null, { payload: axis.value }, null, null, null, null, null, null]);
                    break;
            }
        });

    }
    RED.nodes.registerType("gamepad", GamepadNode);
}