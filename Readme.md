# HYPER INTERNET 3D

Portfolio site of Circuit Lab.

## Installation

Clone repository and solve dependencies.
Requires Ruby (3.1.5 is recommended).

    $ git clone git@github.com:uniba/circuitlab-team.git
    $ cd circuitlab-team
    $ gem install bundler

## Workflow

To compile sass to css manually,

    $ bundle config set path 'vendor/bundle'
    $ bundle install
    $ bundle exec compass compile --config='./compass-config.rb'"

or using Netlify CLI (it also solves dependencies).

    $ netlify build

Host ```/public``` as a static site for preview.

    $ npm i -g serve
    $ cd public
    $ serve

Netlify CLI can provide a local server with same configuration of remote.

    $ netlify dev

## Deployment

Push codes to main branch to simply deploy to Netlify.

Or deploy manually with Netlify CLI.

    $ netlify deploy