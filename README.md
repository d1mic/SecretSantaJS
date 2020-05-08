# :santa: SecretSantaJS
Secret Santa script for pairing and emailing the sender their gift recipient. 

## :snowflake: Getting started

* Make sure you have a seperate gmail account that you will use for SecretSantaJS

* Make sure you have node.js setup and run
```
$ npm install
```

## :snowflake: Setup

### 1. Players setup

  Open *players.json* and setup the players that play Secret Santa. Make sure that the email is in the correct format. The format of the player looks like this:
  * id - the unique id of the player
  * email - email address of the player
  * firstname - player first name
  * lastname - player last name
  * exclude - id of the player to exclude from possible pairs

  ```
  "johndoe": {
      "email": "johndoe@gmail.com",
      "firstname": "John",
      "lastname": "Doe",
      "exclude": "janedoe"
  }
  ```

### 2. Email setup

  Open *mailSender.js* and change placeholder mail and password to your Secret Santa mail
  ```
  user: 'GMAIL_USERNAME',
  pass: 'GMAIL_PASSWORD'
  ```

### 3. Secret santa gift price and text setup

  Change the text of the Secret Santa mail in `text` section and make sure that you change the text and the
  gift price to whatever price you want. The current email text looks like this:

  ```
  Merry Cristmas ${senderName}! 
  You have been selected to be the secret santa for ${pairName}!!! 
  The gift budget is 10$ !
  Have a great 202x! :D`
  ```

## :snowflake: Usage

Run the following command:

```
npm run presents
```

## :snowflake: Authors

* **Nikola Dimić** -  [dimaria95](https://github.com/dimaria95/)

## :snowflake: License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

 
