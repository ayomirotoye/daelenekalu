const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
  try {
    let items = await Item.find();

    const queryObj = { ...req.query };
    const excludedFields = ["sort"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // this allows us to fetch items by the tag pattern, and to get the list of items ordered by when they were created
    if (req.query.tag) {
      items = await Item.find({ tag: req.query.tag }).sort("+dateCreated");
    }

    res.status(200).json({
      status: "success",
      message: "All items retrieved",
      data: {
        items,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `Error retrieving Items: ${error}`,
    });
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = await Item.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Item created",
      data: {
        item: newItem,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `Error creating Item: ${error}`,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Item deleted",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `Error deleting Item: ${error}`,
    });
  }
};
