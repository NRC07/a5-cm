let Distancia = 0
basic.forever(function () {
    Distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(Distancia)
    if (Distancia < 5) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorStop(maqueen.Motors.M2)
    }
    if (Distancia > 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
    }
})
