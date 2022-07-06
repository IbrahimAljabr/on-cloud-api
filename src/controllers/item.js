const { Item } = require("../../models");
const { BadRequest, NotFound } = require("../lib/errors");
const response = require("../utils/response");

/**
 * get item details.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const getItem = async (req, res) => {
 const { id } = req.params;
 const item = await Item.findOne({ where: { id } });

 if (!item) {
  throw new NotFound("no such item");
 }

 res.json(response({ data: item }));
};

/**
 * get all items.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const getAllItems = async (req, res) => {
 const items = await Item.findAll();

 if (!items) {
  throw new NotFound("no Data");
 }

 res.json(response({ data: items }));
};

/**
 * Create new item.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const createItem = async (req, res) => {
 const { name, count, price, image, description, userId } = req.body;

 const item = await Item.create({
  name: name || null,
  count: count || null,
  price: price || null,
  image: image || null,
  description: description || null,
  userId: +userId
 });

 if (!item) {
  throw new BadRequest("Error");
 }

 return res.json(response({ data: item }));
};

/**
 * edit item.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const editItem = async (req, res) => {
 const { name, count, price, image, description, id } = req.body;

 const item = await Item.update(
  {
   name: name || null,
   count: count || null,
   price: price || null,
   image: image || null,
   description: description || null
  },
  { where: { id: +id } }
 );

 if (!item) {
  throw new BadRequest("Error");
 }

 return res.json(response({ data: item }));
};

/**
 * delete item.
 *
 * @param {import('express').Request} req Express request object.
 * @param {import('express').Response} res Express response object.
 */
const deleteItem = async (req, res) => {
 const { id } = req.params;

 await Item.destroy({ where: { id: +id } });

 return res.json(response({}));
};

module.exports = {
 getItem,
 createItem,
 getAllItems,
 editItem,
 deleteItem
};
