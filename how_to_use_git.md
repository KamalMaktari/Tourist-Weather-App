# GUIProject

## Installing Git (for Windows)
### Summarised from https://www.computerhope.com/issues/ch001927.htm

1) Go to https://git-scm.com/downloads and click downloads for windows
2) In the Select Components window, leave all default options checked
3) In the choosing the default editor select your preference (just use Notepad++ if you don't know)
4) Adjusting your PATH environment, we recommend keeping the default Use Git from the command line and also from 3rd-party software
5) Next, we recommend leaving the default selected as Use OpenSSH
6) Next, in Choosing HTTPS transport backend, leave the default Use the OpenSSL library selected
7) In the Configuring the line ending conversions, select Checkout Windows-style, commit Unix-style line endings
8) In the Configuring the terminal emulator to use with Git Bash window, select Use MinTTY (the default terminal of MSYS2)
9) Click the Install
10) Once completed, check the option to Launch Git Bash

## Testing Git Bash

1) Open Git Bash
2) Set your env variables,
   - `git config --global user.name "Your Name Here"`
   - `git config --global user.email "Your Email Here"`
3) You can check this with
   - `git config --global user.name`
   - `git config --global user.email`
4) `cd ~`
5) `git init`
   - You should see: Initialised empty Git repository in...
7) `ls -la`
   - You should see a .git folder
8) `rm -rf .git`
9) `ls -la`
   - the .git folder should now be gone

## How to use Git
### What this [youtube video](https://www.youtube.com/watch?v=USjZcfj8yxE)

## How to pull project
### For when you first start or before creating a new branch
1) Create a directory (folder) in your file system where you want the project - call it whatever you like
2) Open bash and `cd` inside that folder
3) run `git init`
4) create a remote
   - `git remote add origin https://github.com/YaqoobM/GUIProject.git`
5) pull the repo
   - `git pull origin main`
   - Enter your github username
   - Enter your github password
   
## How to first run the app
1) make sure you have pulled the repo first ([here](https://github.com/YaqoobM/GUIProject/blob/main/README.md#how-to-pull-project))
2) cd into the root of the project directory in Git Bash (Windows)
   - e.g.) `cd Documents/my_project/`
3) `npm install`
4) `npm run dev`

## How to start writing code on the project from the main code
1) Make a new branch (call it something which describes what you are doing - e.g. template_for_home_page)
   - `git branch <my_branch_name>`
   - `git checkout <my_branch_name>`
2) Pull the latest version of the repo
   - this will delete any changes which haven't been [pushed](https://github.com/YaqoobM/GUIProject/blob/main/README.md#how-to-push-your-branch)
   - `git pull origin main`
3) Make your changes on this branch

## How to push your branch
#### This is for saving changes to your work and letting other people see
#### We will merge the branches to main separately, dw about it
1) Make sure you are/were on the right branch
   - `git branch` -> this should show that you are on your branch
   - if you weren't then:
     - `git stash`
     - `git checkout <the_correct_branch>`
     - `git stash apply`
     - check it all looks fine
2) `git add .`
3) `git commit -m "Some description of what you've done"`
4) `git push origin <your_branch_name>`

## How to see the latest changes on the main branch
1) Save any changes to your branch ([how to](https://github.com/YaqoobM/GUIProject/blob/main/README.md#how-to-push-your-branch))
2) Checkout the master branch
   - `git checkout master`
3) Pull the latest updates
   - `git pull origin main`
   - if it asks you to add a commit message then just save the file which popped up and exit
   
## How to update your branch to include the latest changes
#### This might be difficult if the latest changes edited a file you are working on, if that is the case then ask someone in the gc
1) do all the steps of: [How to see the latest changes on the main branch](https://github.com/YaqoobM/GUIProject/blob/main/README.md#how-to-see-the-latest-changes-on-the-main-branch)
2) Checkout the branch you are working on
   - `git checkout <my_branch_name>`
5) merge your branch to get the updates
   - `git merge master`
   - add a commit message if it asks you (it might have wrote one for you anyway, check the top line)


# weather-app

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
