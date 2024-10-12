pins.onPulsed(DigitalPin.P5, PulseValue.Low, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("G G G G G G G G ", 1000), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.stringPlayable("F F F F F F F F ", 1000), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("D D D D D D D D ", 1000), music.PlaybackMode.UntilDone)
})
pins.touchSetMode(TouchTarget.P0, TouchTargetMode.Capacitive)
