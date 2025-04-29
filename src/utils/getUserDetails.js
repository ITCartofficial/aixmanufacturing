import users from "@/lib/users.json";

export default function getUserDetails(key = "") {
  const id = Number(key.split("-")[1]);

  const user = users.find((user) => user.id === id);

  return { ...user, fullName: user.firstName + " " + user.lastName };
}
