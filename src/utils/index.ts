export const getNextLink = (links: string[], current: string) => {
  let index = links.findIndex((a) => a === current);
  if (index > -1) {
    index++;
    if (index > links.length - 1) {
      index = links.length - 1;
    }
    return links[index];
  }
  return null;
};

export const getPrevLink = (links: string[], current: string) => {
  let index = links.findIndex((a) => a === current);
  if (index > -1) {
    index--;
    if (index < 0) {
      index = 0;
    }
    return links[index];
  }
  return null;
};
