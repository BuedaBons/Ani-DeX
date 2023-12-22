import { SlashCommandBuilder } from "discord.js";

//Esta a criar um objeto data do tipo SlashCommandBuilder
export const data = new SlashCommandBuilder;
//Atribuir o nome do comando e tem de ser tudo em minusculas
data.setName('boas');
//Atribuir uma descrição ao comando
data.setDescription('Este comando serve para o bot dar um boas');

//Esta função vai ser executada assim que alguem escrever o mekie
export async function execute(interaction) {
    await interaction.reply('Register?');
}