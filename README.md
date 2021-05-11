# Covid countries

## Install

Make sure you have [docker](https://docs.docker.com/get-docker/) installed.

```bash
$ git clone git@github.com:goldylucks/covid-countries.git
$ cd covid-countries
```

## Dev

```bash
$ yarn dev # exposes mongo on port 27017 and node server on port 3000
```

## Usage

```bash
# seeds the DB (Do this first!)
$ curl -X POST localhost:3000/api/countries/seed

# get countries count
$ curl localhost:3000/api/countries/count

# upload csv file with countries count to s3
$ curl -X POST http://localhost:3000/api/countries/post-count-to-s3
# access file at https://covid-countries.s3-us-west-2.amazonaws.com/public/countries-count.csv
```
