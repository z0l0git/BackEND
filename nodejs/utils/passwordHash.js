import bcrypt from "bcrypt";

export const makeHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const compareHash = (password, hash) => {
  const compare = bcrypt.compareSync(password, hash);
  return compare;
};
