// ===========response function==========
const response = (res, status, error = false, data, pagination) => {
  const result = {};
  error ? (result.errors = [{ message: data }]) : (result = data);
  result.pagination = pagination;
  return res.status(status).json(result);
};

// ===========export function=============
module.exports = response;
