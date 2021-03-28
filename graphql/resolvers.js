import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id), // {id} = args.id
  },
};

export default resolvers;
