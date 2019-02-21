'use strict'
const Q = require(`q`)
const conventionalChangelog = require(`conventional-changelog-atom/conventional-changelog`)
const parserOpts = require(`conventional-changelog-atom/parser-opts`)
const recommendedBumpOpts = require(`./conventional-recommended-bump`)
const writerOpts = require(`conventional-changelog-atom/writer-opts`)

module.exports = presetOpts

function presetOpts (cb) {
  Q.all([conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts])
    .spread((conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts) => {
      cb(null, { conventionalChangelog, parserOpts, recommendedBumpOpts, writerOpts })
    })
}
