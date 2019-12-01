export const remove = (arr: string[], value: string): string[] => {
  return arr.filter((el: string) => el !== value);
};

export const removeValue = (obj: any, key: string): any => {
  const keys = Object.keys(obj);
  return keys.reduce((accumulator: {[key: string]: string}, currentValue: string) => {
    if (currentValue !== key) {
      accumulator[currentValue] = obj[currentValue];
    }
    return accumulator;
  }, {});
};
