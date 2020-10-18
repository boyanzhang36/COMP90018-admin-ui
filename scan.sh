#!/bin/bash 

echo starting audit
audit=$(npm audit)
echo $audit

passPhrase='found 0 vulnerabilities'


if [[ "$audit" != *"$passPhrase"* ]]; then
  echo "npm audit indiciates package vulnerabilities, 'npm audit fix' to address these issues."
  exit 1
fi

echo finishing audit