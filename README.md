# Bitcoin Notify

Shows the user a notification upon two different events
- If price +/- change of 2%
- If price goes below a week, 2 weeks, and 3 week's lowest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
MAC OS
Node (npm)
Yarn
```

### Installing

A step by step series of examples that tell you have to get a development env running

```
yarn 
yarn notify
```


### Using the API
There is also a API in the app, once started, go to `http://localhost:3000/api`.

'''
yarn start
'''

There are 3 endpoints:
- '/api/default': 30 days hourly price in USD
- '/api/days/:NumberOfDays': giving hourly price for number of days passed
- '/api/days/:days/lowest/': returns the lowest price within the period of days passed in

Goto `/routes/` folder for more information


