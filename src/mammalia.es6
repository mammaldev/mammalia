import mammals from '../data/mammals.json';

export default ( opts = {} ) => {

  let result = null;

  // Merge options with defaults.
  opts.maxWords = opts.maxWords || 5;

  // Generate pseudo-random numbers within the bounds of the array of mammals
  // until we find a mammal that matches all constraints.
  while ( !result && mammals.length ) {

    let random = Math.floor(Math.random() * mammals.length);
    let mammal = mammals[ random ];

    if ( mammal.split(' ').length <= opts.maxWords ) {
      result = mammal;
      break;
    }

    // If the selected mammal didn't meet the constraints remove it from the
    // array and try another.
    mammals.splice(random, 1);
  }

  // Return the mammal at the random array position.
  if ( !result ) {
    return null;
  }

  return result;
};
