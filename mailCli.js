var {sendSantaMail} = require('./mailSender');
const players = require('./players.json');


/**
 * Shuffles an array randomly
 * @param {Array} arr - array to shuffle 
 */
function shuffle(arr) {
    var i,j,temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;    
};

/**
 * For the array of senders get the randomly generated recipients
 * Function makes sure that the excluded pairs are not possible
 * @param {Array} senders - list of senders
 */
function getRec(senders){
    var rec = Array.from(senders)
    var notFound=true
    while(notFound){
        rec = shuffle(rec)
        notFound = false
        for(var i=0;i< rec.length; i++){
            if(senders[i] == rec[i]){
                notFound = true
            }
            if(players[senders[i]].exclude == rec[i]){
                notFound = true
            }
        }
    }
    return rec;
}


let senders = Object.keys(players);
let recepients = getRec(senders);

for(var i=0; i< senders.length; i++) {
    var senderMail = players[senders[i]].email;
    var senderName =  players[senders[i]].firstname;
    var recepientFullName = players[recepients[i]].firstname + " " + players[recepients[i]].lastname;
    sendSantaMail(senderMail, senderName, recepientFullName);
}
