const fs = require('fs')
const path = require('path')

module.exports = {
  enforceCurrentFolder: true,
  prompts: {
    type: {
      type: 'list',
      message: 'Choose a docker project type:',
      choices: types
    }
  },
  templateFolder: "${answers.type}"
}
