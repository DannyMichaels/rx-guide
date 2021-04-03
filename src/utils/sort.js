// const compare = (key) => (a, b) => {
//   const areWords = // ignore numbers for sorting
//     a?.fields[key].match(/^([a-z]|[A-Z])+/) &&
//     b?.fields[key].match(/^([a-z]|[A-Z])+/);

//   let name1 = a?.fields[key]?.toLowerCase();
//   let name2 = b?.fields[key]?.toLowerCase();

//   if (areWords) {
//     if (name1 < name2) {
//       return -1;
//     } else if (name1 > name2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
// };

const compare = (key) => (a, b) => {
  let name1 = a?.fields[key]
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z ]/g, ''); // ignore numbers for sorting

  let name2 = b?.fields[key]
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z ]/g, '');

  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  } else {
    return 0;
  }
};

export const AZ = (arr) => arr.sort(compare('name'));
export const ZA = (arr) => arr.sort(compare('name')).reverse();
