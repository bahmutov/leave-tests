exports['leave-tests removes tests by full title 1'] = {
  "tests": [
    {
      "value": "b"
    }
  ],
  "suites": []
}

exports['nested suites removes nested test 1'] = {
  "tests": [],
  "suites": [
    {
      "tests": [
        {
          "value": "b"
        }
      ],
      "suites": []
    }
  ]
}

