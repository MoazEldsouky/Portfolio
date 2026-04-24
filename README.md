# Portfolio

Static personal portfolio site with a local-only admin editor.

## Project Structure

- `index.html`: public portfolio page
- `data.js`: portfolio content source used by the deployed site
- `assets/`: images and resume files
- `admin.html`: local-only editor for updating portfolio content in your browser
- `admin-login.html`: old local file, not used in deployment

## How Content Works

The deployed site reads its content from `data.js`.

The local admin panel in `admin.html` does not update GitHub Pages directly. It stores edits in your browser `localStorage` on your machine only.

That means:

- edits made in `admin.html` are visible only on the same browser/device
- GitHub Pages and other devices still use the committed `data.js`
- to publish changes for everyone, you must export a new `data.js` and push it to GitHub

## Local Editing Workflow

1. Open `admin.html` locally in your browser.
2. Edit your portfolio content.
3. Click `Export data.js`.
4. Replace the project `data.js` file with the exported one.
5. Commit and push the changes.

You can also edit `data.js` manually without using the admin panel.

## Deployment

This project is deployed as a static site on GitHub Pages.

Files required for deployment:

- `index.html`
- `data.js`
- `assets/`

Local-only admin files are ignored by git and are not deployed.

## GitHub Pages

1. Push the repository to GitHub.
2. In GitHub, open `Settings` -> `Pages`.
3. Set the source to deploy from the `main` branch.
4. Save and wait for the site to publish.

## Notes

- `admin.html` is for local editing convenience only.
- `admin-login.html` is not part of the deployed workflow.
- If you want site-wide live editing in the future, you need a backend or database.
