// INDUSTRY6D – Produktionswerk
INDUSTRY6D = {
    SEGMENT: ["HY","PE","PER","TRANS","WARB","KANAL","TMP"],
    MOTOR: "RAW.VEC.PULSE",
    ECHO:  "SHOW(x)",
    DRIVE: (x) => SHOW(x)
};

// ECO6D – Energie-Ökosphäre
ECO6D = {
    FLOW: ["PE","KANAL","TMP"],
    ENERGY_IN: "AUTO.PULSE",
    ENERGY_OUT: "SHOW.ECHO",
    ENGINE: (x) => SHOW(x)
};

// MERKT6D – Gedächtniswerk
MERKT6D = {
    MEMORY: ["PER","TMP","HY"],
    STORE: (x) => x,
    RECALL: (x) => SHOW(x)
};

// BOERSE6D – Wertefluss
BOERSE6D = {
    VALUE: ["PE","KANAL","WARB"],
    TRADE: (a,b) => [a,b],
    ECHO: (x) => SHOW(x)
};

// SCHULE6D – Lernwerk
SCHULE6D = {
    LEARN: ["HY","PER","TMP"],
    TRANSFER: (x) => SHOW(x),
    ECHO: (x) => SHOW(x)
};
