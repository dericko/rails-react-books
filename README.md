# README

* Using Rails 7 and React (via esbuild)

* Structure
- All React code lives in app/javascript
- `npm run build` runs `build.js` which defines the main entry `app/javascript/application.js` (which then imports everything for the build)
- see `routes.rb` for:
    - path to React (an empty `app/view/home/index.erb` with js set in the headers of  `layouts/application.html.erb`)
    - path to Rails API (just the one `app/controllers/nyt_books_controller` that fetches and cleans the data)

* To run locally:
`bin/dev`
or
`npm run build && rails s`

* Thank you DigitalOcean for this tutorial:
[https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ruby-on-rails-v7-project-with-a-react-frontend-on-ubuntu-20-04]
