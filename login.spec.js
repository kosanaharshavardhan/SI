// login.spec.js

describe("Password validation function (isStrongPassword)", function () {
    it("should return true for a valid strong password", function () {
      const password = "Pass@123";
      const result = isStrongPassword(password);
      expect(result).toBe(true);
    });
  
    it("should return false for a password without a special character", function () {
      const password = "Password123";
      const result = isStrongPassword(password);
      expect(result).toBe(false);
    });
  
    it("should return false for a password without a number", function () {
      const password = "Password@abc";
      const result = isStrongPassword(password);
      expect(result).toBe(false);
    });
  
    it("should return false for a password with less than 8 characters", function () {
      const password = "Pass@1";
      const result = isStrongPassword(password);
      expect(result).toBe(false);
    });
  });
  
  describe("Login validation function (validateLogin)", function () {
    it("should return success for valid username and password", function () {
      const result = validateLogin("user1@gmail.com", "Pass@123");
      expect(result.success).toBe(true);
    });
  
    it("should return an error for invalid username", function () {
      const result = validateLogin("invalidUser@gmail.com", "Pass@123");
      expect(result.success).toBe(false);
      expect(result.message).toBe("Invalid username or password!");
    });
  
    it("should return an error for invalid password", function () {
      const result = validateLogin("user1@gmail.com", "WrongPassword123");
      expect(result.success).toBe(false);
      expect(result.message).toBe("Invalid username or password!");
    });
  
    it("should return an error when password is weak", function () {
      const result = validateLogin("user1@gmail.com", "password123");
      expect(result.success).toBe(false);
      expect(result.message).toBe(
        "Weak password! Use at least 8 characters, including uppercase, lowercase, number, and special character."
      );
    });
  
    it("should return an error when either username or password is missing", function () {
      const result = validateLogin("", "Pass@123");
      expect(result.success).toBe(false);
      expect(result.message).toBe("Both fields are mandatory!");
  
      const result2 = validateLogin("user1@gmail.com", "");
      expect(result2.success).toBe(false);
      expect(result2.message).toBe("Both fields are mandatory!");
    });
  });
  