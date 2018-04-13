function addNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw "One of the parameters is not a number";
    } else {
        return a + b;
    }
}

// try-catch
try {
  addNumbers(10, 'kenn');
}
catch(error) {
  console.log(error);
}