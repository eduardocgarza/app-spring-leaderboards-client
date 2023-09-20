export default function createUserValidateForm(values) {
  let isValid = true;

  isValid = isValid && values.firstName.trim() !== "";

  return isValid;

  // Optional Property
  // isValid = isValid && values.address.trim() !== "";

  // Optional Property
  // isValid = isValid && values.dateBirth.trim() !== "";
}
