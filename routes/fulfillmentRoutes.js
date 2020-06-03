const {WebhookClient} = require('dialogflow-fulfillment');

const mongoose = require('mongoose');
const Demand = mongoose.model('demand');

module.exports = app => {
    app.post('/', async (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });

        function snoopy(agent) {
            agent.add(`Welcome to my Snoopy fulfillment!`);
        }

        function searched_project(agent) {
            Demand.findOne({'project': agent.parameters.project}, function(err, project) {
                if (project !== null ) {
                    project.counter++;
                    project.save();
                } else {
                    const demand = new Demand({project: agent.parameters.project});
                    demand.save();
                };
            });
            let responseText = `You want to know about ${agent.parameters.project}.`;
            agent.add(responseText);
        }

        function fallback(agent) {
            agent.add(`I didn't understand`);
            agent.add(`I'm sorry, can you try again?`);
        }
        let intentMap = new Map();
        intentMap.set('Snoopy', snoopy);
        intentMap.set('searched projects', searched_project);
        intentMap.set('Default Fallback Intent', fallback);

        agent.handleRequest(intentMap);
    });

}