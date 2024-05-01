import health from "../../index";

const dataList = [
  [{ name: "Маг", health: 3 }, "critical"],
  [{ name: "Маг", health: 100 }, "healthy"],
  [{ name: "Маг", health: 51 }, "healthy"],
  [{ name: "Маг", health: 50 }, "wounded"],
  [{ name: "Маг", health: 15 }, "wounded"],
  [{ name: "Маг", health: 14 }, "critical"],
];

test.each(dataList)("testing function health", (object, expented) => {
  let result = health(object);
  expect(result).toEqual(expented);
});
