import {Client, Events, GatewayIntentBits } from 'discord.js';
import { config } from 'dotenv';
import * as boas from './commands/boas.js';

config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds],
});

//Função que vai retornar um boas
function readyDiscord() {
    console.log('Boas ' + client.user.tag);
}

async function handleInteraction(interaction) {
    if(!interaction.isCommand()) return;
    if(interaction.commandName === 'boas') {
       await boas.execute(interaction);
    }
}

//Este comando é só para comandos que acontecem só uma vez
client.once(Events.ClientReady, readyDiscord);

client.login(process.env.TOKEN);

client.on(Events.InteractionCreate, handleInteraction);