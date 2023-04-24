import { NextFunction, Request, RequestHandler, Response } from "express"
import passport from "passport"
import jwt from "jsonwebtoken"

// Optional customer authentication
// If authenticated, middleware attaches customer to request (as user) otherwise we pass through
// If you want to require authentication, use `requireCustomerAuthentication` in `packages/medusa/src/api/middlewares/require-customer-authentication.ts`
export default (): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const {
      projectConfig: { jwt_secret },
    } = req.scope.resolve("configModule")

    console.log("cookie novapoStore: ", req.cookies.novapoStore);
    console.log("jwt: ", jwt_secret);

    const token = req.cookies.novapoStore;

    if (token == null) {
      // when user login, don't have token
      next();
      return;
    }
    
    jwt.verify(token, jwt_secret, (err, decoded) => {
      if (err) {
        next(err)
      } else {
        req.user = decoded;
        next();
      }
    });

    // passport.authenticate(
    //   ["store-jwt", "bearer"],
    //   { session: false },
    //   (err, user) => {
    //     console.log("error",err);
    //     if (err) {
    //       console.log("nextt",err);
    //       return next(err)
    //     }

    //     if (user) {
    //       req.user = user
    //     }

    //     return next()
    //   }
    // )(req, res, next)
  }
}
