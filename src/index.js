// not immutable!
const leaveTests = tests => suite => {
  const findByFullTitle = t => tests.includes(t.fullTitle())
  suite.tests = suite.tests.filter(findByFullTitle)
  suite.suites.forEach(leaveTests(tests))
  // return the modified input just to avoid undefined
  return suite
}

module.exports = leaveTests
