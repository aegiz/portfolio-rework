## Project description.

New (Gatsby) portfolio ✨!

## Dev stack

- React
- Gatsby
- Mdx (Markdown on steroid [Link](https://mdxjs.com/) 🔥)

## Project Structure

```sh
.
├── content/                  # This folder contains all the necessary assets to generate the page (like texts, images etc.).
│   ├── assets/               # This folder contains all the images that must be processed.
│   │   ├── carousel/         # The image that goes into a carousel.
│   │   └── illustration/     # The rest (can be an image for a project or a page)
│   └── blog/                 # The project files. Each project contains a MDX file and it's feature-image folder.
├── inspiration/              # Different inspiration resources for the UI.
├── node_modules/             # Dependencies.
├── public/                   # Contains all the page generated after a build.
├── src/                      # This folder contains all the code.
│   ├── components/           # All the React components.
│   │   ├── about/            # The components specific to the about page
│   │   ├── homepage/         # The components specific to the homepage
│   │   ├── post/             # The components specific to all the blogpost pages
│   │   └── shared/           # The components shared accross the different pages
│   ├── pages/                # The home, about and 404 pages.
│   ├── templates/            # The blog post template.
│   └── utils/                # Contain useful functions and helpers.
├── static/                   # This folder contains all the images that don't need any preprocessing.
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
