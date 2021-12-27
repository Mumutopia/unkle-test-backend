module.exports = function protectedRoute (req,res,next)  {
   
if (req.session.currentUser.role === "admin") next();
else res.send("not authorised")
}