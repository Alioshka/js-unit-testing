# JS Unit Testing

## Prerequisites
1. NODE version >=6.9.1
2. NPM version >=3.10.8
3. Gulp (installed globally: ` > npm i -g gulp` )
4. ESLint (installed globally: ` > npm i -g eslint` )
5. Git

## Run tests
```
npm test
```
### will create `report` folder with:
* `coverage` output
* `junit` output

## Run tests coverage
```
npm run test:coverage
```

## Run lint
```
npm run lint
```

## Home tasks
### 1. based on example in [index.js](./index.js) and [index.spec.js](./test/index.spec.js),
create the Calculator class with defined methods:
* add - this method should summarize all parameters, that you send to method and return result
* multiply - this method should multiply all parameters, that you send to method and return result
### to be able work with different arguments you will probably needed global arguments object, see example: [arguments](https://github.com/Alioshka/node.js-examples/blob/master/arguments.js)
### 2. after you finish task 1, please, create tests, that check how your implemented methods works
### 3. please, create coverage reporter and made a screenshot, that later you will attach to your home tasks (in the same way as you did this for git etc.)
### 4. enable lint task and check the lint errors - also, please made a screenshot of console and attach it

 ## Advance tasks (not obligatory)
 ### 1. based on Jenkins home task, please, set up CI and configure your tests, also as artifacts, please, share coverage reporter
 ### 2. in the [readData.spec.js](./test/readData.spec.js) you will find tests for [fileDataManager.js](./lib/fileDataManager.js) - try to implement TODO
