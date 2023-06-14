import { pool } from "../db.js";

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO product(name, description, price) VALUES (?, ?, ?)",
      [name, description, price]
    );
    res.json({
      id: rows.insertId,
      name,
      description,
      price,
    });
  } catch (error) {
    return res.json({ msg: "Algo salio mal" });
  }
};

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM product");
    res.json({ msg: "Todos los productos:", rows });
  } catch (error) {
    return res.json({ msg: "Algo salio mal" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const [result] = await pool.query(
      "UPDATE product SET name = IFNULL(?, name), description = IFNULL(?, description), price = IFNULL(?, price) WHERE id = ?",
      [name, description, price, id]
    );

    if (result.affectedRows === 0)
      return res.json({ msg: "Producto no encontrado" });

    const [rows] = await pool.query("SELECT * FROM product WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.json({ msg: "Algo salio mal" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM product WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.json({ msg: "Producto no encontrado" });
    }
    res.json({
      msg:"Producto eliminado"
    })
  } catch (error) {
    return res.json({ msg: "Algo salio mal" });
  }
};
