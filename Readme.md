# HYPER INTERNET 3D

Portfolio site of Circuit Lab.

## Installation

Requires Ruby (3.1.5 is recommended) and Netlify CLI.

Clone repository and solve dependencies.

    $ git clone git@github.com:uniba/circuitlab-team.git
    $ cd circuitlab-team
    $ gem install bundler

Set API Key for Google Maps as an environment variable.

    GOOGLE_MAPS_API_KEY

## Workflow

Launch a local server with watching sass code changes.

    $ netlify dev

Or just compile without local server.

    $ netlify build

## Deployment

Push codes to main branch to simply deploy to Netlify.

Or deploy manually with Netlify CLI.

    $ netlify deploy