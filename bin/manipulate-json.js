// Include dependencies
const fs = require('fs');

// Get data
const json = fs.readFileSync('./assets/_data.json', 'utf8');
let data = JSON.parse(json);

/** Wrap all data in a manner that mustache templates expect */
function wrap(data) {
  const newData = { entries: data };

  return newData;
}

/** Format certain data to render values in a manner suitable to render */
function format(data) {
  data['entries'].forEach( entry => {
    let key;
    for (key in entry) {
      entry[key] = escapeString(entry[key]);
    }
  });

  return data;
}

/** Escape string as necessary for CSV output */
function escapeString(value) {
  // SEE: https://stackoverflow.com/a/17808731/11817077
  return value.replace('"', '""');
}

// Manipulate data
data = wrap(data);
data = format(data);

module.exports = data;
