// getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }); // true
// getIsDeepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }); // false
// getIsDeepEqual(
//   { a: 1, b: 2, obj: { test: "12", }, },
//   { a: 1, b: 2, obj: { test: "12", }, }
// ); // true
// getIsDeepEqual(
//   { a: 1, b: 2, test: [1,2,3], obj: { test: "12", }, },
//   { a: 1, b: 2, test: [1,2,3], obj: { test: "12", }, }
// ); // true

// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 1, b: 3 };
// let obj1 = { a: 1,c:4, b: 2, obj: { test: 13 } };
let obj1 = {
  a: 1,
  b: 2,
  obj: { test: 13, num: [12, { test: 12,  }] },
};
let obj2 = { a: 1, b: 2, obj: { num: [12, { test: 13, }], test: 13 } };
let isEqual = true;

function getIsDeepEqual(obj1, obj2) {
    
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return !isEqual;
  } else {
    for (let [keys, value] of Object.entries(obj1)) {
        
      if (typeof value !== "object" && typeof obj2[keys] !== "object") {
        if (obj1[keys] == obj2[keys]) {
          console.log(obj1[keys]);
        } else {
          return !isEqual;
        }
      } else {
        return getIsDeepEqual(value, obj2[keys]);
      }
    }
  }

  return isEqual;
}

console.log(getIsDeepEqual(obj1, obj2));
