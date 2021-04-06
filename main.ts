enum Buttons {
//% block="Button A"
A,
//% block="Button B"
B,
//% block="Button A+B"
AB,
//% block="Logo"
L,
}
//% color=#7AD7F0 weight=0 icon="\uf2dc" block="Input"
namespace snowflake_input {
    //% block="when $button is pressed $times times"
    export function onButtonPressedTimes (button: Buttons, times: number, a: () => void) {
        basic.forever(function () {
            if (button_pressed(button, times)) {
                control.inBackground(a)
            }
        })
    }
    //% block="when $button is held for $time"
    export function onButtonHeld (button: Buttons, time: number, a: () => void) {
        basic.forever(function () {
            if (button_held(button, time)) {
                control.inBackground(a)
            }
        })
    }
    function button2 (button: Buttons) {
        if (button == Buttons.A) {
            return input.buttonIsPressed(Button.A)
        } else if (button == Buttons.B) {
            return input.buttonIsPressed(Button.B)
        } else if (button == Buttons.AB) {
            return input.buttonIsPressed(Button.AB)
        } else if (button == Buttons.L) {
            return input.logoIsPressed()
        }
        return false
    }
    //% blockId=button_press_35372836287323
    //% block="$button is pressed $number_of_times times in a row"
    export function button_pressed (button: Buttons, number_of_times: number) {
        x:
        for (let index = 0; index < number_of_times; index++) {
            while (button2(button)) {}
            let start = control.millis()
            while(start + 200 > control.millis()) {
                if(button2(button)) {
                    continue x
                }
            }
            return false
        }
        return true
    }  
    //% blockId=button_press_3828372938287328392793289372832
    //% block="$button is held for $time (ms)"
    export function button_held (button: Buttons, time: number) {
        let start = control.millis()
        while(start + time > control.millis()) {
            if(!(button2(button))) {
                return false
            }
        }
        return true
    }
    //% block="set microbit version to V2"
    export function microbit_version_ () {
        if (input.logoIsPressed()) {}
    }
    if (input.buttonIsPressed(Button.AB)) {}
} 