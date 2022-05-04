---
sidebar_position: 100
---

# Configuration file

## Configuration file path

Configuration file is optional.
By default, the file `^\.renovate-issue-action\.ya?ml$` in the current directory is read if it exists.
You can specify configuration file path with the command line option `--config, -c`.

```console
$ renovate-issue-action --config config.yaml
```

## Overview

You can configure the following fields of issues created by renovate-issue-action.

* Repository where issue is created
* Issue title, description, labels, assignees, and so on

You can change the above setting conditionally per Pull Request according to the following Pull Request metadata.

* Pull Request Labels
* Renovate metadata such as `packageName`, `depName`, `groupName`, `packageFileDir`

You can also ignore Pull Requests conditionally.
For example, you can ignore Pull Requests regarding to specific packages.

## Configuration Overlays

There are some configuration layers.

1. conditional configuration in `entries`

e.g.

```yaml
entries:
- if: Metadata.PackageName == "actions/checkout"
  issue:
    labels: ["checkout"]
```

2. global configuration

e.g.

```yaml
issue:
  assignees: ["suzuki-shunsuke"]
```

3. Built-in default Configuration (Configuration file is optional)

Each configuration are merged and duplicated configuration fields are overridden.
Elements of `entries` are evaluated one by one from the first element.
Each element of `entries` has `if` field, and the evaluation result of `if` field must be `true` or `false`.
If the evaluation result of `if` field is `false`, the entry is ignored and the next entry is evaluated.
If the evaluation result of `if` field is `true`, the entry is selected and subsequent entries are ignored.
If no element is selected, `entries` is ignored.

## Example

e.g. renovate-issue-action.yaml

```yaml
projects: # By default, empty
- alias: sre
  column_id: PC_*** # GitHub Project Column ID
- alias: service-a
  next_id: PN_*** # Project Next Item ID
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
    additional_body: @suzuki-shunsuke
    projects:
    - sre
    - service-a
```
