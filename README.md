npm script for creating a markdown template: `<project-name>.md` + `Makefile` -> `<project-name>.pdf`

# Creating a project
```bash
[some-folder]$ npx @bergkvist/mdmake <project-name> [--author=<name>]
```

This will create a `Makefile` as well as `<project-name>.md` in the current folder.

# Usage after creation
```bash

# Compile <project-name>.md to <project-name>.pdf
[some-folder]$ make

# Run make automatically whenever <project-name>.md changes.
[some-folder]$ make watch

# Preview pdf (with automatic updates) in zathura pdf viewer.
[some-folder]$ make preview

# Open file for editing in gedit
[some-folder]$ make edit
```

# Requirements

* `pandoc` with `pdf-latex` (for compiling from `<project-name>.md` -> `<project-name>.pdf`)
* `zathura` (for opening pdf-preview with `make preview`)
* `entr` (for watching file changes with `make watch`)
* `make` (for using the `make` commands)
* `gedit` (for editing the markdown file with `make edit`)

