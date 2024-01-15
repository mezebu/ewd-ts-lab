interface Friend {
  name: string;
  phone: string;
  age: number;
}

const friend1: Friend = {
  name: "Jon Snow",
  phone: "087-12345",
  age: 25,
};

const friend2: Friend = {
  name: "Daenerys Targaryen",
  phone: "086--12345",
  age: 31,
};

const friends: Friend[] = [friend1, friend2];
console.log(friends[1]);

//   -------------------
interface Contact {
  email: string;
  extension: number;
}

interface Colleague {
  name: string;
  department: string;
  contact: Contact;
}

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

const colleagues = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]);
