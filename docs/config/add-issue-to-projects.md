---
sidebar_position: 500
---

# Add Issue to GitHub Projects

e.g.

```yaml
projects:
- alias: sre
  column_id: PC_*** # GitHub Project Column ID
- alias: service-a
  next_id: PN_*** # Project Next Item ID
issue:
  projects:
  - sre # alias
  - service-a # alias
```

You can add a crated issue to GitHub Projects.
ID of GitHub Project isn't human friendly, so in renovate-issue-action you specify projects with aliases.
Pairs of alias and Project are defined in the field `projects`, and in `issue.projects` projects are specified with aliases.
`alias` in `projects` must be unique.

Note that `alias` in `projects` is **not** GitHub Project Name but renovate-issue-action specific alias of GitHub Project.

renovate-issue-action supports both GitHub Project and GitHub Project Beta.

In case of GitHub Project, please specify Project Column ID as `column_id`.

```yaml
projects:
- alias: sre
  column_id: PC_*** # GitHub Project Column ID
```

In case of GitHub Project Beta, please specify Project ID as `next_id`.

```yaml
projects:
- alias: service-a
  next_id: PN_*** # Project Next Item ID
```

## How to get `column_id` and `next_id`

Please see [How to Get GitHub Project ID](get-project-id)
