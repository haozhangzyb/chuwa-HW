/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

const doubleQuantityAndPrice = itemsObject.map(({ quantity, price }) => ({
  quantity: quantity * 2,
  price: price * 2,
}));

const filteredItems = itemsObject.filter((item) => item.quantity > 2 && item.price > 300);

const totalValueOfItems = itemsObject.reduce(
  (totalValue, item) => totalValue + item.price * item.quantity,
  0
);

console.log(doubleQuantityAndPrice);
console.log(filteredItems);
console.log(totalValueOfItems);

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// const formattedString = string
//   .trim()
//   .replace(/\s+/g, " ")
//   .replace(/[^a-zA-Z ]/g, "")
//   .replaceAll(/[A-Z]/g, (upperLetter) => upperLetter.toLowerCase());

const formattedString2 = string
  .trim()
  .replace(/\s+/g, " ")
  .replace(/[^a-zA-Z ]/g, "")
  .toLowerCase();

console.log(formattedString2);

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

let mergedArray = first
  .map((firstItem) => ({
    ...firstItem,
    ...second.find((secondItem) => secondItem.uuid === firstItem.uuid),
  }))
  .sort((a, b) => a.uuid - b.uuid);

console.log(mergedArray);

const temp = second.filter(
  (secondItem) => !mergedArray.find((firstItem) => firstItem.uuid === secondItem.uuid)
);
// console.log(temp);

mergedArray = [...mergedArray, ...temp].sort((a, b) => a.uuid - b.uuid);

console.log(mergedArray);

mergedArray = mergedArray.map((item) => ({
  uuid: item.uuid,
  role: item.role ? item.role : null,
  name: item.name ? item.name : null,
}));

mergedArray.forEach((item, index, arr) => {
  arr[index] = {
    uuid: item.uuid,
    role: item.role ? item.role : null,
    name: item.name ? item.name : null,
  };
});

console.log(mergedArray);

// let newArrayOfObj = [];
