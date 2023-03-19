function receivesAFunction(callbackfunc) {
  callbackfunc();
}

function returnsANamedFunction() {
  return function funcy() {
    console.log("Hello World");
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log("How are you world?");
  };
}
