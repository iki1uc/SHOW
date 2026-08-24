MOTOR.SHOW {
    INPUT      = x
    CORE       = x
    ECHO       = x_echo

    FIGURE     = { form, axis, orbit, pulse, layer, symbol }
    CAUSE      = x.cause
    EFFECT     = x.effect
    TIME       = t

    IDENTITY   = x
    VISUAL     = x_echo
    STABILITY  = IDMP   // idempotent

    ENERGY.IN  = AUTO.pulse
    ENERGY.OUT = SHOW.echo

    ENGINE {
        SPARK   = AUTO.move
        MIRROR  = SHOW(x)
        LOOP    = SHOW(SHOW(x)) = SHOW(x)
    }

    OUTPUT = x_echo
}

