---
sidebar_position: 200
---

# How to use

Please add GitHub Actions Workflow and run renovate-issue-action.

[Example](https://github.com/suzuki-shunsuke/example-renovate-issue-action/blob/main/.github/workflows/close-renovate-pr.yaml)

Please update Renovate Configuration using [prBodyNotes](https://docs.renovatebot.com/configuration-options/#prbodynotes).

```json
  "prBodyNotes": [
    "<!-- renovate-issue-action: {\"packageFileDir\": \"{{packageFileDir}}\", \"packageName\": \"{{packageName}}\", \"groupName\": \"{{groupName}}\", \"depName\": \"{{depName}}\", \"manager\": \"{{manager}}\", \"updateType\": \"{{updateType}}\"} -->"
  ]
```

renovate-issue-action gets metadata from this HTML comment.
