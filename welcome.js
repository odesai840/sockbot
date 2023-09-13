module.exports = client => {
    const channelId = "1151371902766551052";
    client.on("guildMemberAdd", async (member) => {
        console.log(member);

        const message = `Welcome <@${member.id}>!\n\nPlease introduce ` +
        `yourself in <#${276858627795582977}> and read ⁠<#${564931806458150934}>! ` +
        `Also, make sure to look in <#${805245955570008085}> to see what roles you ` +
        `fit in, and feel free to ask any questions you have in ` +
        `<#${1021244668752699423}>.\n\nIf you are interested in forming/joining a ` +
        `small team to work with, try reaching out to people in ` +
        `<#${259523246272020481}>. Then you can use ⁠<#${1011162134496952342}> to ` +
        `set up a space to collaborate!`;

        const channel = await client.channels.fetch(channelId);
        channel.send({content: message});
    });
};