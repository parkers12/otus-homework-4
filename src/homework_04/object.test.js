import { getObject, getObjectAdmin, getVariables } from "./object";

describe("getObject", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const windowSpy = jest.spyOn(window, "prompt");
  it("value in the age field 25", () => {
    windowSpy.mockReturnValue("25");
    console.log(getObject(windowSpy));
    expect(consoleSpy).toHaveBeenCalledWith(25);
  });
});

describe("getObjectAdmin", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("add field to object", () => {
    console.log(getObjectAdmin());
    expect(consoleSpy).toHaveBeenCalledWith("admin");
  });
});

describe("getVariables", () => {
  const consoleSpy = jest.spyOn(console, "log");
  it("field values object to variables", () => {
    console.log(getVariables());
    expect(consoleSpy).toHaveBeenCalledWith("John, 25, admin");
  });
});
