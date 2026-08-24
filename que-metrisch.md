TIEFE_ENGINE = (axis, pol) => {

  if (pol === "gluecklich")   axis.wert = +1;
  if (pol === "ungluecklich") axis.wert = -1;

  return axis;
};
