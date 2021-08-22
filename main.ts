forever(function () {
    if (input.buttonD0.isPressed()) {
        pixel.setColor(0x007fff)
        mouse.move(10, 0)
    } else if (input.buttonD1.isPressed()) {
        pixel.setColor(0xff0000)
        mouse.move(-10, 0)
    } else if (input.buttonD2.isPressed()) {
        pixel.setColor(0x00ff00)
        mouse.move(0, 10)
    } else if (input.buttonD3.isPressed()) {
        pixel.setColor(0xffff00)
        mouse.move(0, -10)
    } else if (input.buttonD4.isPressed()) {
        pixel.setColor(0x7f00ff)
        mouse.click(MouseButton.Left)
    }
})
