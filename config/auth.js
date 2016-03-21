// config/auth.js
module.exports = {

    'facebookAuth': {
        'clientID': '1516343058674613',
        'clientSecret': 'ba5d6dee5fed7e21ae280806c82722c6',
        'callbackURL': 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth': {
        'consumerKey': 'Rrru9szT0JaBKEi594HSog6F2',
        'consumerSecret': 'Q8XQmKiETOc7jPDSYvoUCOuVhMHTkoBDh2HtJ6z8lJVhzYhzOj',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': '375272361331-vqn7iec86q9tj030427hma8719i4ftpt.apps.googleusercontent.com',
        'clientSecret': 'p8ERgc-FyEuDbGxfhGYbx9PP',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }

};
