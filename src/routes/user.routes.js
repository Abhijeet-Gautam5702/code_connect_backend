import { Router } from "express";
import {
  userRegister,
  userLogin,
  userLogout,
  changePassword,
  changeOtherUserAccountDetails,
  getLoggedInUser,
  getUserRegisteredEvents,
  getUserHostedEvents,
} from "../controllers/user.controllers.js";
import { verifyUserToken } from "../middlewares/auth.middlewares.js";

const userRouter = Router();

/*------------------------ ROUTES START ------------------------*/

userRouter.route("/register").post(userRegister);

userRouter.route("/login").post(userLogin);

/*------------------------ SECURED ROUTES ------------------------*/
userRouter.route("/current-user").get(verifyUserToken, getLoggedInUser);

userRouter.route("/logout").post(verifyUserToken, userLogout);

userRouter.route("/change-password").put(verifyUserToken, changePassword);

userRouter
  .route("/change-other-account-details")
  .put(verifyUserToken, changeOtherUserAccountDetails);

userRouter
  .route("/get-registered-events")
  .get(verifyUserToken, getUserRegisteredEvents);

userRouter
  .route("/get-hosted-events")
  .get(verifyUserToken, getUserHostedEvents);

export default userRouter;
