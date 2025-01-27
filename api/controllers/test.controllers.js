import jwt from "jsonwebtoken";
export const shouldBeLoggedIn = async (res, req) => {
  const token = res.cookies.token;
  if (!token) return res.status(401).json({ message: "Not Authentication!" });
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token is not Valid!" });
  });

  res.status(200).json({ message: "You are Authenticated" });
};
export const shouldBeAdmin = async (res, req) => {};
