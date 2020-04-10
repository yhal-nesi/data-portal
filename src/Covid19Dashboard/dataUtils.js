const papaparse = require('papaparse');

export async function formatSeirData (tsvData) {
  let headers = null, dateIndex, valueIndex;
  let contents = {};
  papaparse.parse(tsvData, {
    worker: true,
    step: function(row) {
      if (!headers) {
        headers = row.data;
        dateIndex = headers.findIndex(x => x === 'date');
        valueIndex = headers.findIndex(x => x !== 'date');
      }
      else {
        if (row.data.length >= 2) { // skip empty line at end of file
          contents[row.data[dateIndex]] = row.data[valueIndex];
        }
      }
    }
  });
  return contents;
}
