## Project description.

In 2020 the global COVID pandemy stroke Europe. This was a great occasion to conclude a side-project that started a while ago: finishing my new portfolio ✨.

## Dev stack

- React
- Gatsby
- Mdx (Markdown on steroid [Link](https://mdxjs.com/) 🔥)

## Project Structure

```sh
.
├── content/                  # This folder contains all the files necessary to generate the page (like texts, images etc.).
│   ├── assets/               # The assets to display inside a project (can be an illustration or a carousel picture).
│   ├── blog/                 # The project files. Each project contains a MDX file and it's feature-image folder.
│   └── new-zealand.jpg       # The banner image displayed on the homepage.
├── framerx/                  # The ideation mockups I made to explore different UI display.
├── node_modules/             # Dependencies.
├── public/                   # Contains all the page generated after a build.
├── src/                      # This folder contains all the code.
│   ├── components/           # All the React components.
│   ├── pages/                # The home, about and 404 pages.
│   ├── templates/            # The template common to all the projects.
│   └── utils/                # Contain useful functions and helpers.
├── static/                   # This folder contains all the assets that don't need any preprocessing.
├── .gitignore                # Specifies untracked files to ignore.
├── .prettierignore           # Specifies the kind of files that prettier won't process.
├── gatsby-browser.js         # Useful to import custom fonts.
├── gatsby-config.js          # Configure gatsby packages.
├── gatsby-node.js            # Configure the generation of all the pages for each projects.
├── package-lock.json         # Record the exact version of the dependencies needed.
├── package.json              # Build scripts and record the minimum version of each dependencies required.
└── README.md                 # This file.
```

## Quick start

Execute the following commands:

- To install the dependencies

```bash
sudo npm install --unsafe-perm
```

- To start developping

```bash
gatsby develop
```

The website should now be running on `http://localhost:8000`.
