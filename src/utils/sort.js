// const compare = (a, b, key) => {
//   console.time("compare");
//   const areWords = // ignore numbers for sorting
//     a?.fields[key].match(/^([a-z]|[A-Z])+/) &&
//     b?.fields[key].match(/^([a-z]|[A-Z])+/);

//   if (areWords) {
//     if (a?.fields[key]?.toLowerCase() < b?.fields[key]?.toLowerCase()) {
//       console.timeEnd("compare");
//       return -1;
//     } else if (a?.fields[key]?.toLowerCase() > b?.fields[key]?.toLowerCase()) {
//       console.timeEnd("compare");
//       return 1;
//     } else {
//       console.timeEnd("compare");
//       return 0;
//     }
//   }
//   // 210.637939453125

//   // 0.103759765625
//   //0.0048828125
// };

// const compare = function(key)  {
//   return function(a, b)  {
//     return
//   }
// }

const compare = (key) => {
  //169.969970703125
  //0.01513671875
  // 0.01318359375;
  console.time("compare");
  return (a, b) => {
    const areWords = // ignore numbers for sorting
      a?.fields[key].match(/^([a-z]|[A-Z])+/) &&
      b?.fields[key].match(/^([a-z]|[A-Z])+/);

    let name1 = a?.fields[key]?.toLowerCase();
    let name2 = b?.fields[key]?.toLowerCase();
    if (areWords) {
      if (name1 < name2) {
        console.timeEnd("compare");

        return -1;
      } else if (name1 > name2) {
        console.timeEnd("compare");

        return 1;
      } else {
        console.timeEnd("compare");

        return 0;
      }
    }
  };
  // 0.003173828125
};

// export const AZ = (arr) => arr.sort((a, b) => compare(a, b, "name"));
// export const ZA = (arr) => arr.sort((a, b) => compare(a, b, "name")).reverse();

export const AZ = (arr) => arr.sort(compare("name"));
export const ZA = (arr) => arr.sort(compare("name")).reverse();
