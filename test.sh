#!/bin/bash 

echo start front-end testing 

# log test result into testlog.txt
npm run test:component > testlog.txt 2>&1
test_result=$(cat testlog.txt)
echo $test_result 

passPhrase='Test Suites: 4 passed, 4 total'

if [[ "$test_result" != *"4 passed"* ]]; then 
    echo "npm component test error, 'npm run test:component' to address these issues."
    exit 1
fi

echo finishing front-end testing