---
sidebar_position: 100
---

# Configuration file

Configuration file is optional.
By default, the file `^\.renovate-issue-action\.ya?ml$` in the current directory is read if it exists.
You can specify configuration file path with the command line option `--config, -c`.

```console
$ renovate-issue-action --config config.yaml
```

e.g. renovate-issue-action.yaml

```yaml
renovate_login: 'renovate[bot]' # By default, 'renovate[bot]'. If you use Self-hosted Renovate, you have to set this field.
issue:
  repo_owner: suzuki-shunsuke # By default, the repository which GitHub Actions is run
  repo_name: renovate-issue-action # By default, the repository which GitHub Actions is run
  title: 'Renovate Automerge Failure({{.RepoOwner}}/{{.RepoName}}): {{if .Metadata.GroupName}}{{.Metadata.GroupName}}{{else}}{{.Metadata.PackageName}}{{.Metadata.DepName}}{{end}} {{if .Metadata.PackageFileDir}}({{.Metadata.PackageFileDir}}){{end}}'
  description_header: |
    _This pull request was created by [renovate-issue-action](https://github.com/suzuki-shunsuke/renovate-issue-action)._

    :warning: Please don't edit the Issue title, because renovate-issue-action searches issue with Issue title.

    {{if .Metadata.PackageName}}packageName: {{.Metadata.PackageName}}{{end}}
    {{if .Metadata.GroupName}}groupName: {{.Metadata.GroupName}}{{end}}
    {{if .Metadata.DepName}}depName: {{.Metadata.DepName}}{{end}}
  description_body: "" # By default, empty
  assignees: ["suzuki-shunsuke"] # By default, null
  labels: ["renovate-issue-action"] # By default, null
entries:
- if: Metadata.PackageName == "actions/checkout"
  issue:
    labels: []
    assignees: []
    description_body: |
      ## What to do

      * Check closed Pull Requests
      * Fix the problem and update the package
- if: Metadata.PackageName == "actions/cache"
  ignore: true # If `ignore` is true, do nothing.
- if: |
    any(Labels, {# in Vars.labels})
  vars:
  - name: labels
    value: ["sre"]
  issue:
    repo_name: sre-issues
    addtional_labels: ["sre"]
    addtional_assignees: ["octocat"]
```


