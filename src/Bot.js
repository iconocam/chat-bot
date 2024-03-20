// Import the ActivityHandler class from the botbuilder package
const { ActivityHandler } = require('botbuilder')

// By inheriting ActivityHandler, Bot class gains functionality provided by ActivityHandler and can override its methods as needed.

class Bot extends ActivityHandler {
    // Constructor will be called when a new instance of Bot has been initialized
    constructor() {

        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

        super();
    
        // this.onMessage method sets up a handler for incoming messages. It takes a callback function as an argument

        this.onMessage(async (context, next) => {
            await context.sendActivity(`Hello, I am your INFJ Bot!`);

            // context.sendActivity() is used to send a response message back to the user. In this case, it sends the message "Hello, I am your INFJ Bot!".

            await next();

            // The await next() line ensures that the next middleware or handler in the pipeline is executed after processing the current message.
        });
    }
}

//  need to set up a server to host bot. can use Express.js or Restify
module.exports.Bot=Bot