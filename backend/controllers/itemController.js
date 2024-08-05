const db = require("../models");
const Item = db.Item;

exports.createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ msg: "Items Berhasil ditambahkan" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Gagal menambagkan item" });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll({
      order: [['id', 'ASC']], // Urutkan berdasarkan kolom 'id'
    });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


exports.getItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      res.status(200).send(item);
    } else {
      res.status(500).send({ msg: "data tidak di temukan" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// exports.getItem = async (req, res) => {
//   try {
//     const item = await Item.findByPk(req.params.id);
//     if (!item) {
//       // Check for null or undefined
//       return res.status(404).json({ msg: "Item not found" });
//     }
//     res.status(200).send(item);
//   } catch (error) {
//     res.status(500).send({ message: error.message });
//   }
// };

exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.status(200).json({ msg: "data berjasil di update" });
    } else {
      res.status(404).json({ msg: "gagal update data item" });
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  } 
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      await item.destroy();
      res.status(200).json({ msg: "Item berhasil dihapus" });
    } else {
      res.status(404).send({ message: "item not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
