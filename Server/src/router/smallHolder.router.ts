import express from "express";
import passport from "@config/passport";
import {
  getSmallHolder,
  getAllSmallHolder,
  updateSmallHolder,
  deleteSmallHolder,
} from "@controller/smallHolder.controller";

export default (router: express.Router) => {
  router.get(
    "/SmallHolder/getSmallHolder/:id",
    passport.authenticate("jwt", { session: false }),
    getSmallHolder
  );
  router.get(
    "/SmallHolder/getAllSmallHolder",
    passport.authenticate("jwt", { session: false }),
    getAllSmallHolder
  );
  router.post(
    "/SmallHolder/updateSmallHolder/:id",
    passport.authenticate("jwt", { session: false }),
    updateSmallHolder
  );
  router.delete(
    "/SmallHolder/deleteSmallHolder/:id",
    passport.authenticate("jwt", { session: false }),
    deleteSmallHolder
  );
};