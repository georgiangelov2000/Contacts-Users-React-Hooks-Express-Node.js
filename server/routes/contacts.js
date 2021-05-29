const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/authMiddleware");

const Contact = require("../models/Contacts");

router.get("/contacts", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post(
  "/create-contact",
  [auth, [check("username", "Username is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        username,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Errror");
    }
  }
);

router.put('/:id', auth, async (req, res) => {
  const {username, email, phone, type} = req.body;

  const contactFields = {};
  if (username) contactFields.username = username;
  if (email) contactFields.email = email;
  if (phone) contactFields.phone = phone;
  if (type) contactFields.type = type;

  try {
    let contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).json({msg: 'Contact not found'});

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {$set: contactFields},
      {new: true},
    );

    res.json(contact);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});


router.delete("/delete/:id", auth, async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });

    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
