Demo ViewLocator in dumber bundler.
1. In main.ts, for any view model a/b.ts, load views from templates/a/b.html.
2. In gulpfile.js dumber options "paths", map module id starting with "templates" to absolute path "/templates".
3. The templates files (out of src/ folder) are served at static file by the dev-server.js.

Note any relative require such as `<require from="./app.css"></require>` in templates/app.html is trying to load from location related to the html module id `templates/app.html`, so the app.css is in templates folder too.

If you want to require another view-model, better use absolute module id, such as `<require from="components/foo"></require>`. This will try to load module defined by file `src/components/foo.ts` (or js).

# au-vl

An app using dumber bundler to build. More details in `gulpfile.js`.

## Run in dev mode, plus watch

    npm start

## Run in production mode, plus watch

It updates index.html with hashed file name.

    npm run start:prod

## Build in dev mode

Generates `dist/*-bundle.js`

    npm run build:dev

## Build in production mode

    npm run build

It builds `dist/*-bundle.[hash].js`, updates index.html with hashed js bundle file name. To deploy to production server, copy over both the generated `index.html` and all the `dist/*` files.

For example
```
index.html
dist/entry-bundle.12345.js
```
Copy to production root folder
```
root_folder/index.html
root_folder/dist/entry-bundle.12345.js
```
## To clear cache

Clear tracing cache. In rare situation, you might need to run clear-cache after upgrading to new version of dumber bundler.

    npm run clear-cache


