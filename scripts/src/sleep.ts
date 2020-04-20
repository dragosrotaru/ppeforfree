export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

const randomInt = (min: number, max: number) => {
  if (min > max) throw new Error("min must be less than max");
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) return 1;
  else return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randomSleep = (min: number, max: number) =>
  sleep(randomInt(min, max));
