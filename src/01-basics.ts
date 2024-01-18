import { Friend, Colleague, ColleagueHistory } from "./myTypes";

const friend1: Friend = {
  name: "Jon Snow",
  phone: "087-12345",
  age: 25,
  dob: new Date("1992-10-02"),
};

const friend2: Friend = {
  name: "Daenerys Targaryen",
  phone: "086--12345",
  age: 31,
  interests: ["Football", "Running"],
};

export const friends: Friend[] = [friend1, friend2];
console.log(friends[1]);

//   -------------------

const colleague1: Colleague = {
  name: "Tyrion Lannister",
  department: "Engineering",
  contact: {
    email: "tyrion@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Cersei Lannister",
  department: "Finance",
  contact: {
    email: "cersei@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "Sansa Stark",
  department: "HR",
  contact: {
    email: "sansa@company.com",
    extension: 125,
  },
};

export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
