---
sidebar_position: 600
---

# How to Get GitHub Project ID

In our understanding, to get GitHub Project Column ID and GitHub Project Next Item ID, you have to use GitHub API.

In the following scripts, we use [GitHub CLI](https://cli.github.com/).

## Project Column ID

### Repository Project

```shell
#!/usr/bin/env bash

set -eu

owner=$1
repo=$2
number=$3

# shellcheck disable=SC2016
QUERY='
query($owner: String!, $name: String!, $number: Int!) {
  repository(owner: $owner, name: $name){
    project(number: $number) {
      columns(first: 100) {
        nodes {
          databaseId
          name
        }
      }
    }
  }
}'

gh api graphql -F "owner=$owner" -F "name=$repo" -F "number=$number" -f query="$QUERY"
```

### User Project

```shell
#!/usr/bin/env bash

set -eu

login=$1
number=$2

# shellcheck disable=SC2016
QUERY='
query($login: String!, $number: Int!) {
  user(login: $login){
    project(number: $number) {
      columns(first: 100) {
        nodes {
          databaseId
          name
        }
      }
    }
  }
}'

gh api graphql -F "login=$login" -F "number=$number" -f query="$QUERY"
```

### Organization Project

```shell
#!/usr/bin/env bash

set -eu

login=$1
number=$2

# shellcheck disable=SC2016
QUERY='
query($login: String!, $number: Int!) {
  organization(login: $login){
    project(number: $number) {
      columns(first: 100) {
        nodes {
          databaseId
          name
        }
      }
    }
  }
}'

gh api graphql -F "login=$login" -F "number=$number" -f query="$QUERY"
```

## Project Next Item ID

### User Project

```shell
#!/usr/bin/env bash

set -eu

login=$1
number=$2

# shellcheck disable=SC2016
QUERY='
query($login: String!, $number: Int!) {
  user(login: $login){
    projectNext(number: $number) {
      id
      title
    }
  }
}'

gh api graphql -F "login=$login" -F "number=$number" -f query="$QUERY"
```

### Organization Project

```shell
#!/usr/bin/env bash

set -eu

login=$1
number=$2

# shellcheck disable=SC2016
QUERY='
query($login: String!, $number: Int!) {
  organization(login: $login){
    projectNext(number: $number) {
      id
      title
    }
  }
}'

gh api graphql -F "login=$login" -F "number=$number" -f query="$QUERY"
```
