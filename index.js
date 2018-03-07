// This is a template file for a simple Alexa skill. 
// You may personalize and build off of it however you wish!
// Happy Coding!

var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
}

var handlers = {

	// Upon launch, what do you want Alexa to say? Be sure to include an ':ask'.
  'LaunchRequest': function() {
  	this.emit(':tell', 'I can tell you about this skill.')
    this.emit(':ask', 'What would you like me to do?');
  },
    // This is your custom intent you define on the web interface.
  'SampleIntent': function() {
    this.emit(':tell', 'Hi, User!');
	  this.emit(':ask', 'Would you like me to do something else?')
  },
    // Amazon requires that Alexa skills be able to provide info to users about 
    // how to navigate and use the skill. Include that here. Be sure to include
    // an ':ask' with a question to prompt the user to respond.
  'AMAZON.HelpIntent': function () {    
	  this.emit(':ask', 'Explain how to navigate the intent here and then prompt user for input.')
  },
    // When the user says 'stop', do you want Alexa to say anything before canceling?
    // If so, include that here. If not, delete the line in this function.
  'AMAZON.StopIntent': function () {
     this.emit(':tell', 'Goodbye!')
  },
    // When the user says 'cancel', do you want Alexa to say anything before canceling?
    // If so, include that here. If not, delete the line in this function. 
  'AMAZON.CancelIntent': function () {
     this.emit(':tell', 'Goodbye!')
  },
    // If the user says something that hasn't been made understandable, 
    // how should Alexa respond? You may add an ':ask' emit if you would
    // like for the user to be able to continue using the skill without
    // having to restart it.
  'Unhandled': function() {
	  this.emit(':tell', 'Sorry, I dont understand.');
  },
    // When the session ends, such as after an intent like 'Unhandled' that does not end in an ':ask',
    // do you want Alexa to say something? If so, include that here. If not, delete 
    // the line in this function.
  'SessionEndedRequest': function() {
	  this.emit(':tell', 'Goodbye!');
  }
  
};
