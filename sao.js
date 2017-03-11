const fs = require('fs')
const path = require('path')

const types = fs.readdirSync(path.join(__dirname, 'template'))
  .filter(v => /^docker-/.test(v))
  .map(v => v.substring(7))

const filters = {}
types.forEach(type => {
  filters[`docker-${type}`] = `type === "${type}"`
})

module.exports = {
  enforceCurrentFolder: true,
  prompts: {
    type: {
      type: 'list',
      message: 'Choose a docker project type:',
      choices: types
    }
  },
  templateFolder: `${answers.type}`
}
