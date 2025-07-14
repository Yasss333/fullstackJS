import express from "express";
import { registeruser } from "../controller/user.controller.js  ";

const router=express.Router();
router.get("/register",registeruser)

export default router