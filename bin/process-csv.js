#!/usr/bin/env node

var parse = require('csv-parse');
var path = require('path');
var fs = require('fs');

var outFile = path.join(__dirname, '..', 'data', 'mammals.json');
var file = path.join(__dirname, '..', 'data', 'msw3.csv');
var csv = fs.readFileSync(file, {
  encoding: 'utf8',
});

var entries = csv.split('\n');
var count = entries.length;
var output = [];

// Config based on the structure of the Wilson & Reeder's Mammal Species of the
// World (Third Edition) CSV export from:
//
// http://www.departments.bucknell.edu/biology/resources/msw3/
var CONFIG = {
  TAXON_LEVEL: 12,
  COMMON_NAME: 25,
  SPECIES: 'SPECIES',
};

parse(csv, function ( err, results ) {

  if ( err ) {
    throw err;
  }

  // Iterate over each line in the CSV. We want to extract the relevant data
  // from relevant lines and build up an array that be saved as JSON.
  var count = results.length;
  for ( var i = 0; i < count; i++ ) {

    // The first line is a header and can be ignored.
    if ( !i ) {
      continue;
    }

    var row = results[ i ];
    var taxonLevel = row[ CONFIG.TAXON_LEVEL ];

    // Only species are relevant. The CSV export includes higher-level data
    // such as genus and order.
    if ( taxonLevel !== CONFIG.SPECIES ) {
      continue;
    }

    var name = row[ CONFIG.COMMON_NAME ];
    output.push(name);
  }

  fs.writeFileSync(outFile, JSON.stringify(output));
});
