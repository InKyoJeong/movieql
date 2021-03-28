export const people = [
  { id: 0, name: "Taeyeon", age: 32, gender: "female" },
  { id: 1, name: "Zero", age: 11, gender: "female" },
  { id: 2, name: "Nero", age: 22, gender: "male" },
  { id: 3, name: "Ginger", age: 11, gender: "female" },
  { id: 4, name: "Boogi", age: 22, gender: "male" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
