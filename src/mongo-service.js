const {
  deleteItem,
  disconnectDb,
  dropCollection,
  find,
  findAndSort,
  findAndSortLimit,
  findOne,
  insert,
  limit,
  update,
} = require('./mongo-client.js');

module.exports = (dbo, collection) => ({
  deleteItem: (...args) => deleteItem(dbo, collection, ...args),
  disconnectDb: (...args) => disconnectDb(dbo, collection, ...args),
  dropCollection: (...args) => dropCollection(dbo, collection, ...args),
  find: (...args) => find(dbo, collection, ...args),
  findAndSort: (...args) => findAndSort(dbo, collection, ...args),
  findAndSortLimit: (...args) => findAndSortLimit(dbo, collection, ...args),
  findOne: (...args) => findOne(dbo, collection, ...args),
  insert: (...args) => insert(dbo, collection, ...args),
  limit: (...args) => limit(dbo, collection, ...args),
  update: (...args) => update(dbo, collection, ...args),
});
