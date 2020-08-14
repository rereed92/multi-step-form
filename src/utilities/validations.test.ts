import { required, email, password, findError } from './validations';

describe('Validations', () => {
  describe('required', () => {
    it('should return true if there is a value', () => {
      const value = 'string';
      const result = required(value);
      expect(result).toBeTruthy();
    });

    it('should return false if there is no value', () => {
      const value = '';
      const result = required(value);
      expect(result).toBeFalsy();
    });
  });

  describe('email', () => {
    it('should return true if the email is valid', () => {
      const e = 'test@test.com';
      const result = email(e);
      expect(result).toBeTruthy();
    });

    it('should return false if the email has not @', () => {
      const e = 'testtest.com';
      const result = email(e);
      expect(result).toBeFalsy();
    });

    it('should return false if the email has two ..', () => {
      const e = 'test@test..com';
      const result = email(e);
      expect(result).toBeFalsy();
    });

    it('should return false if the email has no ending', () => {
      const e = 'test@test.';
      const result = email(e);
      expect(result).toBeFalsy();
    });
  });

  describe('password', () => {
    it('should return true if the password matches the criteria: order 1', () => {
      const p = '1Aaaaaaaa';
      const result = password(p);
      expect(result).toBeTruthy();
    });

    it('should return true if the password matches the criteria: order 2', () => {
      const p = 'Aaaaa1aaa';
      const result = password(p);
      expect(result).toBeTruthy();
    });

    it('should return true if the password matches the criteria: order 3', () => {
      const p = '1aaaaAaaa';
      const result = password(p);
      expect(result).toBeTruthy();
    });

    it('should return true if the password has more then 9 characters', () => {
      const p = '1Aaaaaaaaa';
      const result = password(p);
      expect(result).toBeTruthy();
    });

    it('should return true if the password has two numbers', () => {
      const p = '11Aaaaaaaaa';
      const result = password(p);
      expect(result).toBeTruthy();
    });

    it('should return true if the password has two uppercase characters', () => {
      const p = '11AaaaaaaaaA';
      const result = password(p);
      expect(result).toBeTruthy();
    });

    it('should return false if the password is less than 9 characters', () => {
      const p = '11Aaaaa';
      const result = password(p);
      expect(result).toBeFalsy();
    });

    it('should return false if the password does not have at least one number', () => {
      const p = 'Aaaaaaaaa';
      const result = password(p);
      expect(result).toBeFalsy();
    });

    it('should return false if the password does not have at least one uppercase character', () => {
      const p = '1aaaaaaaa';
      const result = password(p);
      expect(result).toBeFalsy();
    });

    it('should return false if the password does not have at least one lowercase character', () => {
      const p = '1AAAAAAAA';
      const result = password(p);
      expect(result).toBeFalsy();
    });
  });

  describe('findError', () => {
    it('should return the error message if there is an error', () => {
      const validations = [
        {
          rule: required,
          message: 'This is a required field',
        },
      ];
      const value = '';
      const result = findError(validations, value);
      expect(result).toEqual(validations[0].message);
    });

    it('should return an empty string if there is no error', () => {
      const validations = [
        {
          rule: required,
          message: 'This is a required field',
        },
      ];
      const value = 'string';
      const result = findError(validations, value);
      expect(result).toEqual('');
    });
  });
});
