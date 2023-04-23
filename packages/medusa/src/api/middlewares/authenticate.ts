import { NextFunction, Request, RequestHandler, Response } from "express"
import passport from "passport"
import jwt from "jsonwebtoken"

export default (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const {
      projectConfig: { jwt_secret },
    } = req.scope.resolve("configModule")

    console.log("cookie: ",req.cookies.novapo);
    console.log("jwt: ",jwt_secret);

    const token = req.cookies.novapo;
    jwt.verify(token, jwt_secret, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Unauthorized' });
      } else {
        req.user = decoded;
        next();
      }
    });

    // passport.authenticate(["admin-jwt", "bearer"], { session: false })(
    //   req,
    //   res,
    //   next
    // )
  }
}
