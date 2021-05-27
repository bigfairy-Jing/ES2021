module.exports = {
  presets: [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["defaults"]
      },
    }]
  ],
  "plugins":[
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-numeric-separator"
  ]
}
