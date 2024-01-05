// Use searchable names

// Bad:
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

// Good:
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);