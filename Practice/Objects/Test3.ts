//Example of type alias

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

const output = createUser({
  name: "mahi",
  email: "mahi@gmail.com",
  isActive: true,
});

console.log(output);

export {};
