/**
 * Created by: Nina Mathew
 */
let goal = 0
let score = 0
basic.showNumber(score)
basic.pause(100)
/**
 * Shows how many goals are made.
 */
// Created on 11/1/20
basic.forever(function () {
    goal = pins.digitalReadPin(DigitalPin.P0)
    if (goal == 1) {
        score = score + 1
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(score)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
