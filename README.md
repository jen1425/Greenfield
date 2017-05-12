# Track Filter

Want to get your SoundCloud feed, but want to filter out some of the noise? The Track Filter web app allows you to specify which posts from your SoundCloud feed you want to see. You can search for different artists in your feed, or tracks by duration and genre. You can also create your custom filters based on the people you are following, and save those filters. Loading a filter will automatically show you posts based on the filter you have selected.

While we have implemented this solution for SoundCloud, we can see this being extensible to other social platforms like Facebook and Twitter as well.

Your feed, your way, no noise!

## Team

  - Aaron Xavier
  - Jennifer Hwa
  - Rishi Raje


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

### Try it out 

You can check out what the app does by visiting http://track-filter.herokuapp.com/. The music tracks might take a while to load depending on the delay from SoundCloud in sending over the embed information for all tracks. 

The site loads with a current user logged in - Aaron Xavier. The default tracks you see when you visit the webpage, represent an unfiltered sample of Aaron's feed from Sound Cloud. 

You can try out the following functionality - 

1) Search for specific artists, genres and durations
2) Create a filter of the people you are following - you can add multiple people to a single filter
3) Load previously created filters and see feed results based on those filters

### Run it locally 

After installing all dev dependencies (see section below), you can run the command 

```
npm start

``` 
to start the client and server. If you want to individually start and stop the server, nodemon and webpack will be installed as part of the dependencies.

### User accounts

As mentioned above, the app currently uses a single user account to display the feed. If you want to test this for other SC user accounts, you will need to programatically get a non-expiring token from SoundCloud for the user in question and save it locally in a DB. 

Ping any of the team members if you want to create another user

## Requirements

- Node 7.8.x

## Development

- React for the client 
- Express and Node for the server
- ClearDB hosted on Heroku for the database

### SoundCloud API

The reference for the SoundCloud API as well as other helpful guides can be found here - https://developers.soundcloud.com/. 
Registering an app with SoundCloud can take up to 3 weeks. Reach out to one of the original team members for information on how to get an app key and secret that you can use for development and testing purposes.

### Database

Instead of a local DB, the project uses the CLearDB mysql DB that is hosted on Heroku. This might lead to difficulties in trying to access the data from a CLI. Sequel PRO will help you connect to this remote DB and view all the schema, data, as well as run queries and manipulate the data.

### Testing 

To run all the test suites, run npm test from the command line. 

#### Client tests 

We have used JEST for client side testing. All client tests can be found in ./spec/client/components.

#### Server tests

Server tests use mocha, chai and supertest. All server tests can be found in ./test

#### Continuous integration 

Circle CI provides continuous integration support. A new PR will automatically trigger a run of all the tests in the test suites. No additional integration should be required. 

The result of the tests will be displayed on Github before merging the PR. This can give the reviewer more confidence in merging the changes.

### Installing Dependencies

From within the root directory:

```
npm install
```
### Environment variables and keys 

### Deployment 

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
