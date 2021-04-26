#!/bin/bash

# fail if any commands fails
set -e

for FILE in $(git diff --name-only); do
    git add ${FILE}
    git commit -m "Updated ${FILE}"
done
for FILE in $(git diff --name-only --staged); do
    git add ${FILE}
    git commit -m "Updated ${FILE}"
done
for FILE in $(git ls-files --others --exclude-standard); do
    git add ${FILE}
    git commit -m "Updated ${FILE}"
done

