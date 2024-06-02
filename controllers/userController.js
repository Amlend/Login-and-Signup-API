const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { HtsUser } = require("../models/htsuser");

// Signup API
exports.postSignup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const existingUser = await HtsUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new HtsUser({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ message: "User created successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create user." });
  }
};

// Login API
exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }
    const user = await HtsUser.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }
    const token = jwt.sign({ userId: user._id }, "secretKey");
    return res.status(200).json({ token, message: "Logged in successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to log in." });
  }
};
