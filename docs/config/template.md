---
sidebar_position: 200
---

# Template

Some configuration fields are parsed with Go's [text/template](https://pkg.go.dev/text/template).
In the template, [sprig Function](http://masterminds.github.io/sprig/) can be used.

## Template Variables

* RepoOwner
* RepoName
* Metadata
  * GroupName
  * PackageName
  * DepName
  * PackageFileDir
  * UpdateType
