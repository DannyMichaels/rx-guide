import { getMeds } from './axiosCalls'

const response =  getMeds()

export const getSortedMeds = () => {
  const sortedMeds = response.sort((recordA, recordB) => {
    const date1 = new Date(recordA.createdTime).getTime();
    const date2 = new Date(recordB.createdTime).getTime();

    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  })
};


