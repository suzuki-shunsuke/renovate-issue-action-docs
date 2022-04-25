---
sidebar_position: 300
---

# Expression

[antonmedv/expr](https://github.com/antonmedv/expr) is used.
About expr, please see [Language Definition](https://github.com/antonmedv/expr/blob/master/docs/Language-Definition.md) too.

e.g.

```yaml
entries:
- if: Metadata.PackageName == "actions/checkout"
```

### Expression Variables

* Labels []string: Pull Request Label Names
* Metadata
  * GroupName
  * PackageName
  * DepName
  * PackageFileDir
  * UpdateType
