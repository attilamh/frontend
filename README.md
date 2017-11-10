Description:
============
Frontend application for a web application skeleton.

Technologies used:
==================
- autopredixer: css auto prefixer for vendor rules https://github.com/postcss/autoprefixer
- editorconfig: for keeping files similar on different machines
- babel: programming language. https://babeljs.io/learn-es2015/
- eslint: javascript linting. https://eslint.org/
- webpack: build tool to load css, create source map, compress js, etc. https://survivejs.com/webpack/preface/
- cross-env: avoid path issues on Windows. https://www.npmjs.com/package/cross-env
- chalk: terminal output coloring for better messages during builds. https://github.com/chalk/chalk
- json-server: fake Rest API for development. https://github.com/typicode/json-server
- json-schema-faker: fake json generator. https://github.com/json-schema-faker/json-schema-faker
- axios: web requests library. https://www.npmjs.com/package/axios or https://github.com/axios/axios
- express: development http server. More info: https://expressjs.com/en/starter/hello-world.html
- localtunnel: helps expose your localhost so that others can view your work without deployment. https://localtunnel.github.io/www/
- compression: node package to simulate gzip compression for a production app simulation. https://www.npmjs.com/package/compression
- chai: assertion library to be used with Mocha. http://chaijs.com/
- mocha: testing framework. https://mochajs.org/
- karma: test runner. https://karma-runner.github.io/1.0/index.html 
- phantomjs: headless browser for testing. http://phantomjs.org/
- nsp: node security library to check for known vulnerabilities. https://github.com/nodesecurity/nsp

Other recommended technologies:
- cheerio: dom parsing library to access elements like in jQuery. https://github.com/cheeriojs/cheerio
- jsdom: in memory dom for testing (instead of headless browser). https://www.npmjs.com/package/jsdom
- nock: http mocking and expectations library used for testing. https://www.npmjs.com/package/nock
- numeral: utility for numeral handling. http://numeraljs.com/

Commands and their effect:
==========================
They are run as: 'npm run {command}' where command is one of:

start:
------
  - display start building message (buildScripts/startMessage.js) by running the ES2015 js code through babel-node
  - run in parallel:
    - check for security vulnerabilities
    - start watch for lint
    - start watch for tests
    - run the development server using babel-node (buildScripts/srcServer.js) that will:
      - include webpack development configuration (webpack.config.dev.js) that will:
        - run scripts through babel loader to translate to javascript
        - run css loaders to load css
        - create bundle.js for all package to use with inline source map to help
      - start up express
      - set "routes" for express so it knows what to supply for each request
      - start listening on development port
    - start up mock-api:
      - run generate mock data script to create db.json in the 'api' folder using the json schema from buildScripts/mockDataSchema.js
      - run the mock api on port 8090 to get the mocked REST API for the application through the url. Go to http://localhost:8090/ to see the routes for mock api and to watch for changes occurring in ./src/api/db.json
share:
------
  - run the development server using babel-node (buildScripts/srcServer.js) that will:
    - include webpack development configuration (webpack.config.dev.js) that will:
      - run scripts through babel loader to translate to javascript
      - run css loaders to load css
      - create bundle.js for all package to use with inline source map to help
      - start up express
      - set "routes" for express so it knows what to supply for each request
      - start listening on development port
  - open localtunel using port 8089

build:
------
  - delete all files from the ./dist folder, including the folder and then recreate it
  - run buildScripts/build.js that will:
    - include webpack production configuration (webpack.config.prod.js) that will:
        - run scripts through babel loader to translate to javascript
        - run css loaders to load css
        - minify and uglify javascript and into two different libraries: vendor.js, main.js
        - separate css from js into it's own css file
        - set a hash to files to handle caching issues between updates
        - create a separate source map (we might want to disable this actually?)
  - run buildScripts/distServer.js that will:
    - start up express
    - set static route to dist/ folder to be able to test the generated files, the published app locally
    - start listening on development port
  
