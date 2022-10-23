module.exports = function(RED) {
    function GamepadNode(config) {

        const node = this;

        function send(index, value) {
            let output = [];
            output[index] = { payload: value };
            node.send(output);
        }

        RED.nodes.createNode(this, config);

        const joystick = require('joystick');
        const gamepad = new joystick(0);
   
        gamepad.on('button', button => {
            switch (button.number) {
                case 0: // cross
                    send(4, button.value);
                    break;
                case 1: // circle
                    send(5, button.value);
                    break;
                case 2: // triangle
                    send(6, button.value);
                    break;
                case 3: // square
                    send(7, button.value);
                    break;
                case 4: // L1
                    send(8, button.value);
                    break;
                case 5: // R1
                    send(9, button.value);
                    break;
                case 6: // L2
                    send(12, button.value);
                    break;
                case 7: // R2
                    send(13, button.value);
                    break;
                case 8: // share button
                    send(16, button.value);
                    break;
                case 9: // options button
                    send(17, button.value);
                    break;
                case 10: // playstation button
                    send(18, button.value);
                    break;
            }
        });
        
        gamepad.on('axis', axis => {
            switch (axis.number) {
                case 0: // left stick x-axis
                    send(0, axis.value);
                    break;
                case 1: // left stick y-axis
                    send(1, axis.value);                    
                    break;
                case 2: // L2 axis data
                    send(10, axis.value);                    
                    break;
                case 3: // right stick x-axis
                    send(2, axis.value); 
                    break;
                case 4: // right stick y-axis
                    send(3, axis.value); 
                    break;
                case 5: // R2 axis data
                    send(11, axis.value);                    
                    break;
                case 6: // d-pad x-axis
                    send(14, axis.value);         
                    break;
                case 7: // d-pad y-axis
                    send(15, axis.value);         
                    break;
            }
        });

    }
    RED.nodes.registerType("gamepad", GamepadNode);
}