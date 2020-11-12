/**
 * Created by: Nina Mathew
 */
let goal = 0
music.playMelody("C5 C5 E E B B C C ", 120)
let score = 0
basic.showNumber(score)
basic.pause(100)
/**
 * Shows how many goals are made.
 */
// Created on 11/1/20
basic.forever(function () {
    goal = pins.digitalReadPin(DigitalPin.P1)
    if (goal == 1) {
        score = score + 1
        basic.showNumber(score)
        music.playMelody("C5 A B E F A B F ", 120)
        basic.pause(1000)
    }
})
