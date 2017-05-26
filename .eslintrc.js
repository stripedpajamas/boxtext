module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "import",
    "html"
  ],
  "extends": ["airbnb"],
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "webpack.config.js"
      }
    }
  },
};
