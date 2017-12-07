'use strict';

const trim = require('lodash.trim');
const isEmpty = require('lodash.isempty');

module.exports = [{
  name: 'title',
  message: `What's your game title?`,
  filter: s => trim(s),
  validate: s => !isEmpty(s) || 'No way! Great games have great titles!!'
}, {
  name: 'description',
  message: 'Give it a short description (optional)',
  filter: s => trim(s)
}];
