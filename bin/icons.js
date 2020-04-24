#!/usr/bin/env node

const build = require('../build/icons')

if (require.main === module) build()

module.exports = build
