import { SlashCommandBuilder } from "discord.js";

//Esta a criar um objeto data do tipo SlashCommandBuilder
export const data = new SlashCommandBuilder;
//Atribuir o nome do comando e tem de ser tudo em minusculas
data.setName('play');
//Atribuir uma descrição ao comando
data.setDescription('This command lets the player create his profile (one time use command)');

//Esta função vai ser executada assim que alguem meter o comando boas
export async function execute(interaction) {
    await interaction.reply('Register?');
}