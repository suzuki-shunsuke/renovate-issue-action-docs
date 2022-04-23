---
sidebar_position: 400
---

# Environment variable

The following environment variables are required.

* GITHUB_TOKEN

Furthermore, the following [GitHub Actions Default environment variables](https://docs.github.com/en/actions/learn-github-actions/environment-variables#default-environment-variables) are used.

* GITHUB_EVENT_PATH
* GITHUB_RUN_ID

## GitHub Token

Basically, you can use GitHub Actions Access Token `github.token`.
But if you want to create issues in other repositories or avoid API Rate Limiting,
you have to use Personal Access Token or GitHub App's token.

The following permissions are required.

* `issues:write`
