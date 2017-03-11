const fs = require('fs')
const path = require('path')

const types = [
  'docker-craft',
  'docker-wordpress',
  'docker-static',
]

module.exports = {
  enforceCurrentFolder: true,
  prompts: {
    type: {
      type: 'list',
      message: 'Choose a docker project type:',
      choices: types
    }
  },
  templateFolder: "<%= type %>"
}
