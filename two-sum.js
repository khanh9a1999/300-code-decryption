// Bài 1 nếu chỉ có ít nhất 1 cặp
// const arr = [1, 2, 4, 5, 6];
// const target = 5;

// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         console.log("two sum", [arr[i], arr[j]]);
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// twoSum(arr, target);

// Bài 2 nếu có nhiều cặp

const arr = [1, 2, 3, 4, 5, 6];
const target = 5;

const twoSum = (arr, target) => {
  let arrValues = [];
  let newArrValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          arrValues = [...arrValues, [arr[i], arr[j]]];
        }
      }
    }
  }

  if (arrValues.length < 2) {
    console.log("newArrValues :>> ", (newArrValues = [...arrValues[0]]));
    return (newArrValues = [...arrValues[0]]);
  }

  console.log("arrValues :>> ", arrValues);
  return arrValues;
};

twoSum(arr, target);
