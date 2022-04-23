---
sidebar_position: 100
---

# Overview

## Background

We wrote blog posts about how to handle a number of Pull Requests by Renovate automatically.

* [2022-02-18 Renovate の大量の Pull Request を処理する技術](https://blog.studysapuri.jp/entry/2022/02/18/080000)
* [2022-03-29 Automate handling a number of Pull Requests by Renovate in Terraform Monorepo](https://devs.quipper.com/2022/03/29/automate-handling-a-number-of-pull-requests-by-renovate-in-terraform-monorepo.html)

As described in blog posts, leaving Renovate pull requests open will limit the number of new pull requests that can be created.
Therefore, you could close pull requests that could not be automerged and delete feature branches automatically.

`renovate-issue-action` helps you managing tasks as GitHub Issues to handle closed pull requests.

## Overview

Please run `renovate-issue-action` with GitHub Actions triggered by `pull_request`'s `closed` events.
An Issue is created when Renovate's Pull Request was closed by other than Renovate.

![image](https://user-images.githubusercontent.com/13323303/164878251-96020cd9-052c-4e33-a17d-c6201ebcaa94.png)

--

![image](https://user-images.githubusercontent.com/13323303/164878264-641b05ab-3a4d-42d8-82b8-76d806751ebe.png)

--

![image](https://user-images.githubusercontent.com/13323303/164878275-ba0264a6-043b-473a-b1a4-9c8c58054662.png)

The issue description has a list of closed Pull Requests.
If the issue already exists, closed pull request is added to the list of closed Pull Request instead of creating a new Issue.

![image](https://user-images.githubusercontent.com/13323303/164878350-74ae61b2-0a22-4dbd-a06c-cc3d9345b54b.png)

If a Pull Request is merged or Renovate closes it, the related issue would be closed.

![image](https://user-images.githubusercontent.com/13323303/164878427-eb5a9d48-634e-4099-a38f-bbb0a7b894f6.png)

--

![image](https://user-images.githubusercontent.com/13323303/164878444-0df765eb-1e2b-4a84-9b21-6ff911511bd1.png)

## Why don't you use closed Pull Requests instead of Issues?

You could use closed Pull Requests instead of Issues without `renovate-issue-action`.
Then why do we develop `renovate-issue-action`?

We think it is inconvenient to treat closed Pull Requests as tasks.
Renovate creates a new Pull Request when a new version is released,
so there would be multiple Pull Requests against the same task.
It is difficult to understand the list of unresolved Pull Requests.
