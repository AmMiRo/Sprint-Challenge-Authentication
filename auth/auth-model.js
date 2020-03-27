const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findBy,
  findById,
  add,
  edit,
  remove
};

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function edit(changes, id) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id);
    });
}

async function remove(id) {
  const user = await findById(id);
  db("users")
    .where({ id })
    .del();
  return user;
}
