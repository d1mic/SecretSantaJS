const send = require('gmail-send')({
    user: 'GMAIL_USERNAME',
    pass: 'GMAIL_PASSWORD',
});

/**
 * Sends the gift sender (santa) the email with the recipients name
 * 
 * @param {String} senderEmail - email of the santa (gift sender)
 * @param {String} senderName - name of the gift sender
 * @param {String} pairName - name of the gift recepient
 */
module.exports.sendSantaMail = function(senderEmail, senderName, pairName) {
    let options = {
        subject: 'Secret santa!',
        to: senderEmail,
        text: `Merry Cristmas ${senderName}! 
        You have been selected to be the secret santa for ${pairName}!!! 
        The gift budget is 10$ ! 
        Have a great 202x! :D`
    }

    /*
    //left for testing purposes
    console.log("----------------------------")
    console.log(options.to)
    console.log(options.text)
    console.log("----------------------------")
    */

    send(options, (error, result, fullResult) => {
        if (error) 
            console.error(error);
        console.log("Success sending santa mail to: " + fullResult.envelope.to);
    });
}
