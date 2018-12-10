const express = require('express');
const vendorsRouter = express.Router();
const { Vendor }  = require('../models');

vendorsRouter.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.findAll();
    res.json({ data: vendors })
  } catch(e) {
    console.log(e);
    res.status(500).json({message: `The rout is not connecting`})
  }
});

vendorsRouter.get('/:id', async (req, res) => {
  try {
    const vendors = await Vendor.findById({
      where
    })
  }
})

vendorsRouter.post('/', async (req, res) => {
  try{
    const vendor = await Vendor.create(req.body);
    res.json(vendor);
  } catch(e) {
    console.error(e);
    res.status(500).json({
      msg: e.message
    })
  }
});

vendorsRouter.put('/id:', async (req, rest) => {
  try {
    const vendor = await Vendor.findOne({
      where: {
        id: req.params.id
      }
    });
    vendor.update({
      name: req.body.name,
      description: req.body.description,
      img_url: req.body.img_url
    });
    res.json(vendor);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: e.message
    })
  }
});

module.exports = {
  vendorRouter
}
