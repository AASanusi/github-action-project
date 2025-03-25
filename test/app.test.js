const sayHello = require("../app");

test("Greets the user", () => {
  expect(sayHello("World")).toBe("Hello, World.");
});
