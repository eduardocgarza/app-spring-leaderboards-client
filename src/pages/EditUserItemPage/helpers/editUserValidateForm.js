export default function editUserValidateForm(values) {
  let isValid = true;
  const { firstName, address, dateBirth } = values;

  if (firstName) {
    isValid = isValid && values.firstName.trim() !== "";
  }
  if (address) {
    isValid = isValid && values.address.trim() !== "";
  }
  if (dateBirth) {
    isValid = isValid && values.dateBirth.trim() !== "";
  }

  isValid = isValid && (!!firstName || !!address || !!dateBirth);

  return isValid;
}
