---
sidebar_position: 200
---

# How to use

Please add GitHub Actions Workflow and run renovate-issue-action.

[Example](https://github.com/suzuki-shunsuke/example-renovate-issue-action/blob/main/.github/workflows/renovate-issue-action.yaml)

## :warning: Use pull_request_target instead of pull_request

We tried to trigger GitHub Actions Workflow by pull_request's closed event, but unfortunately it doesn't work well.
We asked GitHub Support, then was given the following answer.

ref. [Sometimes GitHub Actions isn’t triggered by pull_request closed event | GitHub Community Forum](https://github.community/t/sometimes-github-actions-isnt-triggered-by-pull-request-closed-event/250234/4)

> Hi there,
> 
> Thank you for your patience while the team investigated this issue.
> 
> I have been updated that the reason you are experiencing this issue is that GitHub doesn’t queue the merge commit job for closed PRs; So workflows using on: { pull_request: { types: [“closed”] } } will not consistently be triggered.
> 
> The workaround is to use a pull_request_target trigger as those do not require a merge commit but run the workflow from the target branch. But take note of the warnings in the docs below.
> 
> https://docs.github.com/en/actions/reference/events-that-trigger-workflows#pull_request_target 1
>
> The team has also suggested that you either combine both workflows or use a workflow_run trigger for the second workflow

So we recommend using `pull_request_target` trigger instead of `pull_request` trigger.
For the security reason, you should checkout code from the default branch.

```yaml
on:
  pull_request_target: # Use pull_request_target instead of pull_request
    branches: [main]
    types:
      - closed
jobs:
  renovate-issue-action:
    # restrict pull request author to only Renovate
    if: github.event.pull_request.user.login == 'renovate[bot]'
    runs-on: ubuntu-latest
    steps:
      # Checkout default branch for security
      - uses: actions/checkout@v3
```

## Renovate's prBodyNotes

Please update Renovate Configuration using [prBodyNotes](https://docs.renovatebot.com/configuration-options/#prbodynotes).

```json
  "prBodyNotes": [
    "<!-- renovate-issue-action: {\"packageFileDir\": \"{{packageFileDir}}\", \"packageName\": \"{{packageName}}\", \"groupName\": \"{{groupName}}\", \"depName\": \"{{depName}}\", \"manager\": \"{{manager}}\", \"updateType\": \"{{updateType}}\"} -->"
  ]
```

renovate-issue-action gets metadata from this HTML comment.
