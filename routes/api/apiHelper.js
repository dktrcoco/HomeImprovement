export function getGoogleId(req, res) {
  var currentUserGoogleId = req.cookies.googleId;
  if (typeof currentUserGoogleId === "undefined") {
    res.status(500).json("User not logged in");
  }
  return currentUserGoogleId;
}
