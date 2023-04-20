import { NextFunction, Request, RequestHandler, Response } from "express"
import passport from "passport"

export default (): RequestHandler => {
  // return (req: Request, res: Response, next: NextFunction): void => {
  //   passport.authenticate(["admin-jwt", "bearer"], { session: false })(
  //     req,
  //     res,
  //     next
  //   )
  // }
  return (req: any, res: Response, next: NextFunction): void => {
    console.log("novapo authentication", req.body, req.user);
    req.user = { userId: "usr_01GXR24DFGBDQ8E16FH8W3FC3V" }
    next();
  }
}
