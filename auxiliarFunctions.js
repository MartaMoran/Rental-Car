const checkType = (value, expected, required) => {
  if ((value && typeof value !== expected) || value === "") {
    throw new Error("el valor esperado no coincide con el introducido");
  }
  if (!value && required === true) {
    throw new Error("el valor no existe y es requerido");
  }
  if (!value && required === false) {
    return value;
  }

  return value;
};

export { checkType };
