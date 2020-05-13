## Project description.

In 2020 the global COVID pandemy stroke Europe. So, to keep myself busy I decided to conclude a side-project that started a while ago: finishing my new portfolio.

## Dev stack

- React
- Gatsby
- Mdx (Markdown on steroid)

## Project Structure

```sh
.
├── content/                  #
│   ├── assets/               #
│   ├── blog/                 #
│   └── new-zealand.jpg       # The banner image on the Homepage
├── framerx/                  # The ideation mockups I made to explore different UI display.
├── node_modules/             # Dependencies
├── public/                   # Static page generated after deploy
├── src/                      # This folder contains all the code
│   ├── components/           # All the react components
│   ├── pages/                # The home, about and 404 pages
│   ├── templates/            # The template common to all the projects
│   └── utils/                # Contain useful functions and helpers
├── static/                   # This folder contains all the assets that don't need any processing
├── .gitignore                # Specifies untracked files to ignore
├── .prettierignore           # Specifies the kind of files that prettier won't process.
├── gatsby-browser.js         # Used to import custom fonts
├── gatsby-config.js          # Configure gatsby packages and we way it works.
├── gatsby-node.js            # Generate all the pages for each projects
├── package-lock.json         # Record the exact version of the dependencies
├── package.json              # Build scripts and minimum dependencies
└── README.md                 # This file
```

## Quick start

Execute the following command

- To install the dependencies

```bash
sudo npm install --unsafe-perm
```

- To start developping

```bash
gatsby develop
```

The website should now be running on `http://localhost:8000`.
