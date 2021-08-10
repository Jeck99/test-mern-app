const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateStudentData(data) {
  let errors = {};
// Convert empty field to an empty string so we can use validator functions
  data.firstName = isEmpty(data.firstName) ? ""  :data.firstName;
  data.lastName = isEmpty(data.firstName) ? ""  :data.lastName;
  data.age = isEmpty(data.age) ? 0  :data.age;
// firstName checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "first Name field is required";
  } 
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "last Name field is required";
  } 
  if (Validator.isEmpty(data.age)) {
    errors.age = "age Name field is required";
  } 

return {
    errors,
    isValid: isEmpty(errors)
  };
};