
/**
 * The sortByLowestValue method compares values A and B to order
 * from smallest to largest
 *
 * @name sortByLowestValue
 * @function
 * @param {Object} a
 * @param {Object} b
 * @return {Any}
 */
function sortByLowestValue(a, b) {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}

/**
 * The sortByHighestValue method compares values A and B to order
 * from largest to smallest
 *
 * @name sortByHighestValue
 * @function
 * @param {Object} a
 * @param {Object} b
 * @return {Any}
 */
function sortByHighestValue(a, b) {
  if (a < b) {
    return 1;
  }

  if (a > b) {
    return -1;
  }

  return 0;
}

/**
 * The mappedList method maps the list
 *
 * @param {Object} list
 * @param {Object} key
 * @return {Array}
 */
function mappedList(list, key = null) {
  if (key === null) {
    key = 'value';
  }

  return list.map(function(el, index) {
    return { index: index, value: el[key] };
  });
}

/**
 * The sort() method sorts the elements
 * of the array itself and returns the array.
 *
 * @param {Object} list
 * @param {Function} callback
 * @return {Object}
 */
function orderList(list, callback, key = null) {
  if (key === null) {
    key = 'value';
  }
  const mapList = mappedList(list, key);

  let ordering = mapList.sort(function(a, b) {
    return callback(a[key], b[key]);
  });

  return ordering.map(function(el) {
    return list[el.index];
  });
}
