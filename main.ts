enum Buttons {
//% block="Button A"
A,
//% block="Button B"
B,
//% block="Button A+B"
C,
//% block="Logo"
L,
}
//% color=#7AD7F0 weight=0 icon="\uf2dc" block="Input"
namespace input2 {
    function button2 (button: number) {
        if (button = 1) {
            return input.buttonIsPressed(Button.A)
        } else if (button = 2) {
            return input.buttonIsPressed(Button.B)
        } else if (button = 3) {
            return input.buttonIsPressed(Button.AB)
        } else if (button = 4) {
            return input.logoIsPressed()
        }
        return false
    }
    //% blockId=button_press_35372836287323
    //% block="when button $albab is pressed $number_of_times times in a row"
    export function button (albab: Buttons, number_of_times: number) {
        x:
        for (let index = 0; index < number_of_times; index++) {
            while (button2(albab)) {}
            let start = control.millis()
            while(start + 200 > control.millis()) {
                if(button2(albab)) {
                    continue x
                }
            }
            return false
        }
        return true
    }  
    //% blockId=button_press_3828372938287328392793289372832
    //% block="when button: $button is held for $time (ms)"
    export function button3 (button: Buttons, time: number) {
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
        if (input.buttonIsPressed(Button.AB)) {}
    }
    if (input.buttonIsPressed(Button.AB)) {}
}  
//function button (albab: string, number_of_times: number) {
//    if (albab == "A" || albab == "a") {
//        for (let index = 0; index < number_of_times; index++) {
//            while (input.buttonIsPressed(Button.A)) {
//                basic.pause(1)
//            }
//            for (let index = 0; index < 8; index++) {
//                basic.pause(25)
//                if (input.buttonIsPressed(Button.A)) {
//                    break;
//                }
//            }
//            if (!(input.buttonIsPressed(Button.A))) {
//                return false
//            }
//        }
//    } else if (albab == "B" || albab == "b") {
//        for (let index = 0; index < number_of_times; index++) {
//            while (input.buttonIsPressed(Button.B)) {
//                basic.pause(1)
//            }
//            for (let index = 0; index < 8; index++) {
//                basic.pause(25)
//                if (input.buttonIsPressed(Button.B)) {
//                    break;
//                }
//            }
//            if (!(input.buttonIsPressed(Button.B))) {
//                return false
//            }
//        }
//    } else if (albab == "A+B" || (albab == "AB" || (albab == "a+B" || (albab == "aB" || (albab == "A+b" || (albab == "Ab" || (albab == "ab" || (albab == "a+b" || (albab == "B+A" || (albab == "BA" || (albab == "B+a" || (albab == "Ba" || (albab == "b+A" || (albab == "bA" || (albab == "ba" || albab == "b+a"))))))))))))))) {
//        for (let index = 0; index < number_of_times; index++) {
//            while (input.buttonIsPressed(Button.AB)) {
//                basic.pause(1)
//            }
//            for (let index = 0; index < 8; index++) {
//                basic.pause(25)
//                if (input.buttonIsPressed(Button.AB)) {
//                    break;
//                }
//            }
//            if (!(input.buttonIsPressed(Button.AB))) {
//                return false
//            }
//        }
//    } else if (albab == "Logo" || (albab == "Logo" || albab == "LOGO")) {
//        for (let index = 0; index < number_of_times; index++) {
//            while (input.logoIsPressed()) {
//                basic.pause(1)
//            }
//            for (let index = 0; index < 8; index++) {
//                basic.pause(25)
//                if (input.logoIsPressed()) {
//                    break;
//                }
//            }
//            if (!(input.logoIsPressed())) {
//                return false
//            }
//        }
//    }
//    return true
//}