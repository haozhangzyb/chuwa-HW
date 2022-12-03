/*
    Question 1
    Given the following array and implement the table dynamically
*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const createElementHelper = (tag, text, className) => {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
};

let table = createElementHelper("table");

const addEleToTable = (ele) => {
  let row = createElementHelper("tr");
  row.append(...ele);
  table.append(row);
};

let th = tableInfo.tableHeader.map((item) => createElementHelper("th", item));
addEleToTable(th);

tableInfo.tableContent.forEach((obj) => {
  let td = Object.values(obj).map((item) => createElementHelper("td", item));
  addEleToTable(td);
});

document.querySelector("#Q1").append(table);

/*
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

let listItem = list.map((item) => createElementHelper("li", item));

let orderedList = createElementHelper("ol");
orderedList.append(...listItem);
document
  .querySelector("#Q2")
  .insertBefore(orderedList, document.querySelector("#ol").nextSibling);

// TODO: why cannot use listItem here?
let listItem2 = list.map((item) => createElementHelper("li", item));
let unorderedList = createElementHelper("ul");
unorderedList.append(...listItem2);
document.querySelector("#Q2").append(unorderedList);

/*
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = createElementHelper("select");
dropDownList.forEach((obj) => {
  select.innerHTML += `<option value="${obj.value}">${obj.content}</option>`;
});
document.querySelector("#Q3").append(select);
