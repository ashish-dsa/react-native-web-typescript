#!/bin/bash

# fail if any commands fails
set -e


CURRENT_BRANCH="$(echo $(git branch --show-current))"
echo "$CURRENT_BRANCH"
VERSION="$(echo $(node -pe "require('./package.json').version"))"
echo "$VERSION"
git push --set-upstream origin ${CURRENT_BRANCH} \
-o merge_request.create \
-o merge_request.target=master \
-o merge_request.title="Merge ${CURRENT_BRANCH} into master" \
-o --follow-tags \