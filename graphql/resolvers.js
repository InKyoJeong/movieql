const taeyeon = {
  name: "Taeyeon",
  age: 32,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => taeyeon,
  },
};

export default resolvers;
