# GEO · RESPO · MINI
721-Marke · Segmentfluss · Reaktionsstufen

## 1 · RESPO-Level nach Wert
< 100      → PALAISE_RESPO
100–199    → RESPO_ARG_SCAN
200–299    → RESPO_WHIRL
≥ 300      → RESPO_WHIRL + NC_HUB_ALL

## 2 · 721er-Marke
721 = GEO-Schwelle für tiefe Reaktion
→ aktiviert RESPO_WHIRL + NC_HUB_ALL automatisch
→ nutzt Segmentketten:

SEG_A: 3 → 9 → 81
SEG_B: 9 → 81 → △
SEG_C: 9 → 81 → 27

## 3 · GEO-Formel
GEO(x) = SEG(x) + QUE(x)

SEG(x) = Segmentwert aus A/B/C
QUE(x) = Achse.wert × Polarität

## 4 · RESPO bei 721
RESPO(721) = 
  SEG_C (27) 
+ QUE(arbeit/frei/bildung) 
+ NC_HUB_ALL

→ Ausgabe: RESPO_WHIRL (lacht)
