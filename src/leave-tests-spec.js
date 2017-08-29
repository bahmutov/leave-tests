'use strict'

/* eslint-env mocha */
const leaveTests = require('.')
const snapshot = require('snap-shot-it')

describe('leave-tests', () => {
  const suite = {
    tests: [
      {
        value: 'a',
        fullTitle () {
          return 'a'
        }
      },
      {
        value: 'b',
        fullTitle () {
          return 'b'
        }
      }
    ],
    suites: []
  }

  it('removes tests by full title', () => {
    const titles = ['b']
    snapshot(leaveTests(titles)(suite))
  })
})

describe('nested suites', () => {
  const a = {
    value: 'a',
    fullTitle () {
      return 'a'
    }
  }
  const b = {
    value: 'b',
    fullTitle () {
      return 'b'
    }
  }
  const suite = {
    tests: [a],
    suites: [
      {
        tests: [b],
        suites: []
      }
    ]
  }

  it('removes nested test', () => {
    const titles = ['b']
    snapshot(leaveTests(titles)(suite))
  })
})
