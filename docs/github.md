---
sidebar_position: 2
---

# Github

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

//Windows
$ choco install gh
//Mac
$ brew install gh

$ gh auth login
```

### Repo

```js
$ gh repo create repoName --private // Private repo flag
// Added remote https://github.com/#user/#repoName.git
$ git init
$ git add .
$ git remote add origin "../remote.git"
$ git branch -c branchName
$ git push origin branchName
```

## Usage

### Branches

```js
// Default Branch "main"

// Create "hotfix" branch and switch to it [used to be $ git checkout -b hotfix]
$ git switch -c hotfix
// Commit all with message
$ git commit -a -m "[hotfix 1a092] Login error fix" 
 // Switch to "main" branch [used to be $ git checkout main]
$ git switch main
// Merge "hotfix" branch to "main"
$ git merge hotfix
// Delete "hotfix" branch
$ git branch -d hotfix
// Push "main" branch to remote "origin"
$ git push  origin main
```

### Teamwork

```js
// Example with 'main' and 'dev' branches

// Starting point - 'dev' is same as 'main' and currently on 'main' branch
$ git switch dev

// ------
// [ Make some changes in dev branch ]
// ------

$ git commit -a -m "Commit Message"
$ git push origin dev

// If error [local !== repo]
    $ git pull --rebase origin dev
    $ git push origin dev
// endIf

// You should probably not be doing this part!
$ git switch main
$ git merge dev
$ git commit -a -m "Merge Message"
$ git push  origin main
```

### Custom Files in Branch
1. Rename files. <br />**For example:** <em>variesComponent.js</em>, needs 2 versions => <em>variesComponent-dev.js</em> and <em>variesComponent-prod.js</em>  
2. Add variesComponent.js to .gitignore 

```jsx
$ git switch dev
$ cp variesComponent-dev.js variesComponent.js

$ git switch main
$ cp variesComponent-prod.js variesComponent.js
```

### Commands

```js
// Update Git on Windows
$ git update-git-for-windows

// Update Git on Mac
$ brew upgrade git
```
