#!/usr/bin/env node

const boxen = require('boxen')
const chalk = require('chalk')
const leftPad = require('left-pad')

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

const newline = '\n'
const formatLabel = value => chalk.white.bold(leftPad(value, 12) + ':')
const formatLink = value => chalk.cyan(value)

const data = [
  {
    label: chalk.white.bold('Michael Stramel'),
    value: '',
  },
  {
    label: '',
    value:
      chalk.white('Software Engineer') +
      chalk.gray(' @ Coolfire Solutions') +
      newline,
  },
  {
    label: formatLabel('Twitter'),
    value: formatLink('https://twitter.com/stramel89'),
  },
  {
    label: formatLabel('GitHub'),
    value: formatLink('https://github.com/stramel'),
  },
  {
    label: formatLabel('LinkedIn'),
    value: formatLink('https://linkedin.com/in/stramel'),
  },
  {
    label: formatLabel('Website'),
    value: 'COMING SOON',
  },
  {
    label: newline + chalk.cyan(leftPad('$', 13)),
    value: chalk.white('npx stramel'),
  },
]

const output = data
  .map(({ label, value }) => `${label}${label && ' '}${value}`)
  .join(newline)

console.log(chalk.green(boxen(output, boxenOptions)))
