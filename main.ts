//% color=0 weight=0 icon="\uf7df" block="Input"
namespace buttons.advanced {
    //% block="when button $albab (A, B, A+B, logo) is pressed $number_of_times times in a row"
    export function button (albab: string, number_of_times: number) {
        if (albab == "A" || albab == "a") {
            for (let index = 0; index < number_of_times; index++) {
                while (input.buttonIsPressed(Button.A)) {
                    basic.pause(1)
                }
                for (let index = 0; index < 8; index++) {
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.A)) {
                        break;
                    }
                }
                if (!(input.buttonIsPressed(Button.A))) {
                    return false
                }
            }
        } else if (albab == "B" || albab == "b") {
            for (let index = 0; index < number_of_times; index++) {
                while (input.buttonIsPressed(Button.B)) {
                    basic.pause(1)
                }
                for (let index = 0; index < 8; index++) {
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.B)) {
                        break;
                    }
                }
                if (!(input.buttonIsPressed(Button.B))) {
                    return false
                }
            }
        } else if (albab == "A+B" || (albab == "AB" || (albab == "a+B" || (albab == "aB" || (albab == "A+b" || (albab == "Ab" || (albab == "ab" || (albab == "a+b" || (albab == "B+A" || (albab == "BA" || (albab == "B+a" || (albab == "Ba" || (albab == "b+A" || (albab == "bA" || (albab == "ba" || albab == "b+a"))))))))))))))) {
            for (let index = 0; index < number_of_times; index++) {
                while (input.buttonIsPressed(Button.AB)) {
                    basic.pause(1)
                }
                for (let index = 0; index < 8; index++) {
                    basic.pause(25)
                    if (input.buttonIsPressed(Button.AB)) {
                        break;
                    }
                }
                if (!(input.buttonIsPressed(Button.AB))) {
                    return false
                }
            }
        } else if (albab == "Logo" || (albab == "Logo" || albab == "LOGO")) {
            for (let index = 0; index < number_of_times; index++) {
                while (input.logoIsPressed()) {
                    basic.pause(1)
                }
                for (let index = 0; index < 8; index++) {
                    basic.pause(25)
                    if (input.logoIsPressed()) {
                        break;
                    }
                }
                if (!(input.logoIsPressed())) {
                    return false
                }
            }
        }
        return true
    }   
}   