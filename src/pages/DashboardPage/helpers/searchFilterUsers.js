export default function searchFilterUsers(search, users) {
  return users.filter((user) => {
    const searchKeywords = search.toLowerCase().split(" ");
    return searchKeywords.every((keyword) =>
      user.firstName.toLowerCase().includes(keyword)
    );
  });
}
