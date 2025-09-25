function without(object, propertyName) {
  const modObject = JSON.parse(JSON.stringify(object));
  modObject[propertyName] = null;
  return modObject;
}
