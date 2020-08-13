console.log('Loading function');

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const sessionAttributes = event.sessionAttributes;
    return {
	    "dialogAction": {
    		"type": "Close",
    		"fulfillmentState": "Fulfilled",
    		"message": {
    			"contentType": "SSML",
    			"content": "You are Booked!!! Enjoy!"
    		}
    	}
    }
};
