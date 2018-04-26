### TODO

* template engine
* github repo

### Learn about

HMR: angular: https://github.com/gdi2290/angular-hmr
changing scss, looks like it reloaded a whole js moduel, not just css

2.  decorators
3.  HTML CANVAS
4.  WebGL
    WebComponent
    WebAssembly
5.  service workers - can use for offline dev?
6.  run local express server
    -- read through express documentation
7.  setup a postgres db and create some post endpoints
8.  try out websockets on the express server
9.  materialize?
10. <video></video> tags.

### Reasons to use webpack

1.  create dependency graph from imports and import them all in a bundle, or in chunks
    -- handles modules for older browsers that don't support them
    -- don't have to order dependencies
    -- don't have to keep adding dependencies to index.html
2.  treat css, html, and js as modules
3.  NOT a task runner: transpilation typescript, preprocess scss, prepare for prod etc.
4.  dynamic fetching of modules works natively, and webpack allows us to combine the managed chunking WITH dynamic fetching. As in it will make the chunks for you, and load them when you say they should be.
5.  HMR: speeds up development.

### Don't Forget

* [ ] update prod: plugins: [require('babel-plugin-dynamic-import-webpack')]

### Features

1.  clonezilla:

* why: blurb of text
* savedisk: show a question about backing up and do a bar animation. show complete.
* restore: ask where to get the backup image, and always fail with an error not found.
* recover-iso-zip: show . . . complete.
* exit should drop to a bash prompt and timer to a reset.
* responsive
* small load but with all source? or super minified? check

2.  speed reader app like on kindle.

3.  d3 viz of something cool. maybe of oakland flight heights?

4.  a game using html canvas :) maybe with cool easter eggs.
    I like the idea of a game where the keyboard is the only thing available to you - no mouse allowed, another anti-web feature.

5.  crazy ! facial recognition software to run through google hangouts - to analyze sentiment and make a chart after ward based on time.

-- NOTES for display

* will not work on IE or Edge (until custom components are supported);
