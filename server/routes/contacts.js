const express=require('express');
const router=express.Router();
const { check, validationResult } = require("express-validator");
const auth=require("../middleware/authMiddleware");

const User = require('../models/User');
const Contact = require('../models/Contacts');