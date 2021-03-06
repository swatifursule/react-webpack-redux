To use the all new awesome ES6 syntax:

Let’s add that.

1. Install the dependencies
    npm install babel-core babel-loader babel-preset-env --save-dev

2. Create and configure a .babelrc

    {
        "presets": [
            "env"
        ]
    }


3. Tell webpack to use babel-loader to allow ES6 syntax. You can either add this as an argument in your package.json, like below:

    "scripts": {
        "dev": "webpack --mode development --module-bind js=babel-loader",
        "build": "webpack --mode production --module-bind js=babel-loader"
    }
OR, create a webpack.config.js

    module.exports = {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          }
        ]
      }
    }


Main Redux Principle
======================
1. The Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
2. The state of the application lives as a single, immutable object within the store
3. As soon as the store receives an action it triggers a reducer
4. The reducer returns the next state


There are two key points for avoiding mutations in Redux:
============================
1. Using concat(), slice(), and …spread for arrays
2. Using Object.assign() and …spread for objects
