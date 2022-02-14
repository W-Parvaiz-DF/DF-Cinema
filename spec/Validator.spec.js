const Validator = require("../src/js/Validator");

describe("Validator", () => {
  describe("Validator.validateName", () => {
    it("Validates a correct name", () => {
      const validator = new Validator();
      const expected = true;

      const actual = validator.validateName("Benjy");

      expect(expected).toBe(actual);
    });

    it("Only upper/lower cases allowed", () => {
      const validator = new Validator();
      const expected = false;

      const actual = validator.validateName("@!'");

      expect(expected).toBe(actual);
    });

    it("Only names longer than 1 character allowed", () => {
      const validator = new Validator();
      const expected = false;

      const actual = validator.validateName("");

      expect(expected).toBe(actual);
    });

    it("Only names shorter than 15 characters allowed", () => {
      const validator = new Validator();
      const expected = false;

      const actual = validator.validateName("abcdefghijklmno");

      expect(expected).toBe(actual);
    });
  });

  describe("Validator.validateEmail", () => {
    it("Valiates a correct email", () => {
      const validator = new Validator();
      const expected = true;

      const actual = validator.validateEmail("example@email.com");

      expect(expected).toBe(actual);
    });

    it("Only strings with a @ character", () => {
      const validator = new Validator();
      const expected = false;

      const actual = validator.validateEmail("exampleemail.com");

      expect(expected).toBe(actual);
    });

    it("Only strings with a @ character", () => {
      const validator = new Validator();
      const expected = false;

      const actual = validator.validateEmail("example@email");

      expect(expected).toBe(actual);
    });
  });
});

//invalid answerd in red text and red border
