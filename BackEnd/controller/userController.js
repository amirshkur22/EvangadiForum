const register = (req, res) => {
  res.end("user registered");
};
const login = (req, res) => {
  res.end("user loged in");
};
const checkUser = (req, res) => {
  res.end("user checked");
};
export { register, login, checkUser };
