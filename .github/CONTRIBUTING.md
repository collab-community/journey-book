## 💥 How to Contribute

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/collab-community/journey-book/pulls)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/collab-community/)

- Take a look at the existing [Issues](https://github.com/collab-community/journey-book/issues) or [create a new issue](https://github.com/collab-community/journey-book/issues/new/choose)!
- [Fork the Repo](https://github.com/collab-community/journey-book/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.
- Create a [Pull Request](https://github.com/collab-community/journey-book/compare) (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.

---

## ⭐ HOW TO MAKE A PULL REQUEST:

**1.** Start by making a Fork of the [**journey-book**](https://github.com/collab-community/journey-book) repository. Click on the <a href="https://github.com/EddieHubCommunity/LinkFree/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/journey-book
```

**3.** Navigate to the newly created journey-book project directory:

```bash
cd journey-book
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/collab-community/journey-book.git
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

### Alternatively, Git CLI way to Sync forked repository with origin repository:

```bash
git fetch upstream
```

```bash
git merge upstream/main
```

### [Github Docs](https://docs.github.com/en/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github) for Syncing

**7.** Make your changes to the source code (which may include bug fixes or enhancements).

To add your journey follow the below steps 👇
- Create a file named using your GitHub username `your-github-username.md` in the directory [journeys](https://github.com/collab-community/journey-book/tree/main/journeys), this will ensure it is unique.
- Make sure you add your profile in [Data.json](https://github.com/collab-community/journey-book/blob/main/Data.json) file.
> Your profile entry should look like 👇

```json
{
  "name": "YOUR_NAME",
  "username": "YOUR_GITHUB_USERNAME",
  "avatar": "https://github.com/YOUR_GITHUB_USERNAME.png"
}
```

> For Example :-

```json
{
  "name": "Adarsh Jaiswal",
  "username": "Adarsh-jaiss",
  "avatar": "https://github.com/Adarsh-jaiss.png"
}
```

- Add your journey in your `your-github-username.md` file. You just have start with Introducing your self & share your social media links in that readme file and that will be displayed on our website (if you have not achieved something as of creating the journey currently, As you learn something new you can always update your README file).
- If you want to know what exactly your journey should inculde please refer to &rarr; [What should I share in my journey?](https://collab-community.github.io/journey-book/#/_pages/what-should-i-share).

**8.** Stage your changes:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`

> Instead, stage your changes for each file/folder
>
> By using journeys path it means it will add all files and folders under that folder, it is better to be specific

```bash
git add journeys
```

_or_

```bash
git add "<files_you_have_changed>"
```

**9.** Commit your changes:

```bash
git commit -m "<your_commit_message>"
```

**10.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**11.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)!

**12.** **Congratulations!** You've made your first contribution to [**journey-book**](https://github.com/collab-community/journey-book/graphs/contributors)! 🙌🏼

**_:trophy: After this, the maintainers will review the PR and will merge it if it helps move the journey-book project forward. Otherwise, it will be given constructive feedback and suggestions for the changes needed to add the PR to the codebase._**

---

## Style Guide for Git Commit Messages :memo:

### Format

`<type>(optional scope): <description>`
Example: `feat(pre-event): add speakers section`

### 1. Type

Available types are:

| **Type**     | **Description**                                                                                                               |
|:------------:|-------------------------------------------------------------------------------------------------------------------------------|
| **feat**     | Changes about addition or removal of a feature. Ex: `feat: add table on landing page`, `feat: remove table from landing page` |
| **fix**      | Bug fixing, followed by the bug. Ex: `fix: illustration overflows in mobile view`                                             |
| **docs**     | Update documentation (README.md)                                                                                              |
| **style**    | Updating style, and not changing any logic in the code (reorder imports, fix whitespace, remove comments)                     |
| **chore**    | Installing new dependencies, or bumping deps                                                                                  |
| **refactor** | Changes in code, same output, but different approach                                                                          |
| **ci**       | Update github workflows, husky                                                                                                |
| **test**     | Update testing suite, cypress files                                                                                           |
| **revert**   | When reverting commits                                                                                                        |
| **perf**     | Fixing something regarding performance (deriving state, using memo, callback)                                                 |

### 2. Optional Scope

Labels per page Ex: `feat(pre-event): add date label`

\*If there is no scope needed, you don't need to write it

### 3. Description

Description must fully explain what is being done.

Add BREAKING CHANGE in the description if there is a significant change.

**If there are multiple changes, then commit one by one**

- After colon, there are a single space Ex: `feat: add something`
- When using `fix` type, state the issue Ex: `fix: file size limiter not working`
- Use imperative, dan present tense: "change" not "changed" or "changes"
- Don't use capitals in front of the sentence
- Don't add full stop (.) at the end of the sentence

---

## 💥 Issues

In order to discuss changes, you are welcome to [open an issue](https://github.com/collab-community/journey-book/issues/new/choose) about what you would like to contribute. Enhancements are always encouraged and appreciated.

## All the best! 🥇

[![built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://collab-community.github.io/journey-book/)
