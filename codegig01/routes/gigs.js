const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) => 
  Gig.findAll()
    .then(gigs => 
        {
            console.log(gigs)
            res.sendStatus(200)
        })
    .catch(err => console.log(err)));

  
// Add a gig
router.get('/add', (req, res) =>{
    //let { title, technologies, budget, description, contact_email } = req.body;
    //let errors = [];
    const data={
        title:'aaaaaaaaaaaaaa',
        technologies:'bbbbbbbbbbbb',
        budget:'ccccccccccccccc',
        description:'ddddddddddddddd',
        contact_email:'eeeeee@gmail.com'
    }


    let { title, technologies, budget, description, contact_email } = data;
    Gig.create({
        title,
        technologies, 
        budget, 
        description, 
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err))
})

module.exports = router;