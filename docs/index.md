---
sidebar_position: 1
---

# Intro

## Setup

### Local Machine

```js
// Check if git is installed
$ git --version

// Configure git
$ git config --global user.name "username"
$ git config --global user.email  "email"
```

### Github

```js
// Install Github CLI
$ choco install gh
$ gh auth login
```

### Repo

```js
$ gh repo create repoName --private // Private repo flag
// Added remote https://github.com/#user/#repoName.git
$ git init
$ git add .
$ git remote add origin "../remote.git"
$ git push origin branchName
```

## Usage

### Branches

```js
//Default Branch "master"

// Create "hotfix" branch and switch to it [used to be $ git checkout -b hotfix]
$ git switch -c hotfix
// Commit all with message
$ git commit -a -m "[hotfix 1a092] Login error fix"
 // Switch to "master" branch [used to be $ git checkout master]
$ git switch master
// Merge "hotfix" branch to "master"
$ git merge hotfix
// Delete "hotfix" branch
$ git branch -d hotfix
// Push "master" branch to remote "origin"
$ git push origin master
```

### Commands

```js
// Update Git on Windows
git update-git-for-windows

```
