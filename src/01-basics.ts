const friend1 = {
  name: "Jon Snow",
  phone: "087-12345",
  age: 25,
};

const friend2 = {
  name: "Daenerys Targaryen",
  phone: "086--12345",
  age: 31,
};

const friends = [friend1, friend2];
console.log(friends[1]);

//   -------------------
const colleague1 = {
  name: "Tyrion Lannister",
  department: "Engineering",
  contact: {
    email: "tyrion@company.com",
    extension: 121,
  },
};

const colleague2 = {
  name: "Cersei Lannister",
  department: "Finance",
  contact: {
    email: "cersei@company.com",
    extension: 132,
  },
};

const colleague3 = {
  name: "Sansa Stark",
  department: "HR",
  contact: {
    email: "sansa@company.com",
    extension: 125,
  },
};

const colleagues = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
