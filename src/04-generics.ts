import { friends, colleagues } from "./01-basics";
import { Friend, Colleague } from "./myTypes";

function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
  return data.find(criteria);
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith("Jane")));
console.log(
  findMatch<Colleague>(colleagues.current, (c) => c.department === "Finance")
);

function sort<T>(data: T[], compareFn: (a: T, b: T) => number): T[] {
  // Create a copy of the array to avoid mutating the original
  const sortedArray = [...data];

  // Use the sort method with the provided comparison function
  sortedArray.sort(compareFn);

  return sortedArray;
}

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
