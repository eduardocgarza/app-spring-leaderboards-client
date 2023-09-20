export default function editUserFormChanged(originalUser, formUser) {
  const firstName = originalUser.firstName || "";
  const address = originalUser.address || "";
  const dateBirth = originalUser.dateBirth || "";
  
  return (
    firstName !== formUser.firstName ||
    address !== formUser.address ||
    dateBirth !== formUser.dateBirth
  );
}
