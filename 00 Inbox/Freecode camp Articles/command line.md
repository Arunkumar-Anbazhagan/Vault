# Command Line for Beginners – How to Use the Terminal Like a Pro

## Table of Contents
- Difference between console, terminal, CLI, and shell
- Why use the terminal?
- Different shell types
- Most common/essential commands
- Intro to writing scripts
- Useful git commands
- Final round-up

---

## 1. Difference Between Console, Terminal, Shell, and CLI

- **Console**: Physical interface (screen, keyboard, mouse) to interact with your computer.
- **Terminal**: A program (window) to enter text commands for your computer to process. Multiple terminals can be installed/run.
- **Shell**: Program that interprets commands (e.g., Bash, Zsh, Fish, PowerShell); can also execute scripts.
    - Shells are independent from terminals; any shell can run in any terminal.
- **Command Line (CLI)**: The space/interface where commands are entered, often used interchangeably with "terminal."

---

## 2. Why Should I Even Care About Using the Terminal?

- **Efficiency**: One command replaces many GUI clicks; tasks are faster.
- **Automation**: Use scripts for repetitive tasks.
- **Only option**: On servers/cloud platforms, only CLI may be available.
- **Fun/Cool factor**: Looks impressive and feels good to master.

---

## 3. Different Kinds of Shells

- **POSIX Standard**: Like ECMAScript for JS, POSIX defines shell behavior and syntax.
- **Identifying Your Shell**: Run `echo $0` in the terminal.
- **Popular Shells**:
    - Bash (default on Linux/Mac)
    - Zsh (like Bash + improvements)
    - Fish (not POSIX-compliant, so less compatible for scripting)
    - Ash/Dash (lightweight/stripped-down POSIX shells)
- **Customization**:
    - Shell/terminal config files allow personalized setups.
    - Examples: OhMyZsh, Starship plugins.

---

## 4. Most Common and Useful Commands

- `echo`: Print message
    - `echo Hello World`
- `pwd`: Print working directory
- `ls`: List directory contents
    - `ls -a`: Show hidden files
- `cd`: Change directory
    - `cd ..`: Up one level
    - `cd`: Go to home directory
- `mkdir DIR`: Make new directory
- `rmdir DIR`: Remove directory
- `touch file.txt`: Create empty file
- `rm file.txt`: Remove file
- `cp source dest`: Copy file/directory
    - `cp file.txt /folder/`
- `mv source dest`: Move file/directory
    - `mv file.txt /folder/`
- `head file.txt`: First lines of file
- `tail file.txt`: Last lines of file
- `command --help`: Help for command
- `man command`: Manual page for command
- `code file.txt`: Open file in default editor
- `edit file.txt`: Open in CLI text editor (vim/nano etc.)
    - Exit vim: `:q!`
- `ctrl+c`: Stop current process
- `ctrl+shift+c/v`: Copy/Paste in terminal
- `clear`: Clear terminal
- `exit`: Close terminal
- Arrow keys: navigate command history
- Tab: autocompletion

---

## 5. Useful Git Commands

- `git init`: Initialize repo
- `git add .`: Stage changes
- `git commit -m "message"`: Save changes
- `git status`: See changes and branch
- `git clone URL`: Clone remote/local repo
- `git remote add origin URL`: Set remote repo URL
- `git remote -v`: List current remote repos
- `git push`: Push commits to remote
- `git branch`: List branches
    - `git branch <branch>`: create branch
- `git checkout branch`: Switch branches
- `git pull`: Download changes from remote
- `git diff branch`: View diff between branches
- `git merge branch`: Merge another branch into current
- `git log`: Show commit history
- `git diff --help`: Command documentation

---

## 6. Intro: Writing Your First Script

**Steps**:
1. Create `.sh` file: `touch script.sh`
2. Add shebang on first line to specify shell (`#! /bin/sh` or `#! /bin/bash`)
3. Assign variable from first argument:
    ```
    repoName=$1
    ```
4. Loop to get missing argument:
    ```
    while [ -z "$repoName" ]; do
      echo 'Provide a repository name'
      read -r -p $'Repository name:' repoName
    done
    ```
5. Initialize local repo:
    ```
    echo "# $repoName" >> README.md
    git init
    git add .
    git commit -m "First commit"
    ```
6. Create repo via GitHub API:
    ```
    curl -u yourUser https://api.github.com/user/repos -d '{"name":"'$repoName'", "private":false}'
    ```
7. Get remote URL and add as origin:
    ```
    GIT_URL=$(curl -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/yourUser/"$repoName" | jq -r '.clone_url')
    git branch -M main
    git remote add origin $GIT_URL
    git push -u origin main
    ```
8. Make file executable: `chmod u+x script.sh`
9. Run your script: `./script.sh` or `bash ./script.sh`

**Aliases**:
- To run script from any directory, add an alias in `.bash_aliases`:
    ```
    alias newghrepo="bash /path/to/script.sh"
    ```
- Find script’s absolute path: `readlink -f script.sh`

---

## 7. Final Round-Up

- Terminal mastery boosts your efficiency and opens up automation possibilities.
- Explore further:
    - Bash crash courses
    - YouTube tutorials on shells, git, scripting
    - Documentation (`man` pages) for everything!

---

> For deeper dives, follow recommended resources and explore more about terminal and shell scripting.

