npm script for creating a markdown template: `[filename].md` + `Makefile` -> `[filename].pdf`

# Creating a project
```bash
[some-folder]$ npx @bergkvist/make-pandoc-md [filename]
```

This will create a `Makefile` as well as `[filename].md` in the current folder.

# Usage after creation
```bash

# Compile [filename].md to [filename].pdf
[some-folder]$ make

# Run make automatically whenever [filename].md changes.
[some-folder]$ make watch

# Preview pdf (with automatic updates) in zathura pdf viewer.
[some-folder]$ make preview
```

# Requirements

* `pandoc` with `pdf-latex` (for compiling from `[filename].md` -> `[filename].pdf`)
* `zathura` (for opening pdf-preview)
* `entr` (for watching file changes)
* `make` (for using the `make` commands)

