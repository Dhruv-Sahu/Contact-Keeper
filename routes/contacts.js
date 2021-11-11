const express = require('express');
const router = express.Router();

// @route - GET api/contacts
// @description - get all users contacts
// @access - private

router.get('/',(req,res) => {
    res.send('Get all contacts');
});

// @route - post api/contacts
// @description - add a new contact
// @access - private

router.post('/',(req,res) => {
    res.send('Add contacts');
});

// @route - PUT api/contacts
// @description - update contact
// @access - Private

router.put('/',(req,res) => {
    res.send('Update contacts');
});


// @route - DELETE api/contacts/:id
// @description - Delete contact
// @access - Private

router.delete('/:id', (req,res) => {
    res.send('delete Contact');
});


module.exports = router;