const getGCD = (a, b) => {
  if (!b) return a;
  return getGCD(b, a % b);
};

export default getGCD;
