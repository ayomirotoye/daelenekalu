const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

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

    res.status(204).json({
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
