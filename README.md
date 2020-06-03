# A react chatbot using dialogflow and mangodb, which can be customized for any types of web apps.

First you need to create a dialogflow agent as well as a mangodb database; then after cloaning the repository you need to make a new file in the "config" folder and type the following code inside that file:

module.exports = {  
	googleProjectID: 'your google project id',  
	dialogFlowSessionID: 'an arbitrary dialogflow session id',  
	dialogFlowSessionLanguageCode: 'dialogflow language code, usually --> "en-US"',  
	googleClientEmail: 'your dialogflow client email',  
	googlePrivateKey: 'your google private key',  
	mongoURI: 'your mangodb uri'  
}

you also need to set your google credential in your localhost by typing:

set GOOGLE_APPLICATION_CREDENTIALS=path to google application credential jason file

then type:

- npm install
- npm run dev