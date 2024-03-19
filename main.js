const { REST, Routes, DataResolver } = require("discord.js");
const config = require('./config.json');

async function setBannerAndAvatar() {
    // Check if the required keys exist and their values are not empty
    if (!config.token) {
        throw new Error('Token is missing or empty in config.json');
    }

    const rest = new REST().setToken(config.token);
    const body = {};

    if (config.bannerPath) {
        body.banner = await DataResolver.resolveImage(config.bannerPath);
    }

    if (config.avatarPath) {
        body.avatar = await DataResolver.resolveImage(config.avatarPath);
    }

    // If both banner and avatar are missing or empty, throw an error
    if (Object.keys(body).length === 0) {
        throw new Error('Both banner and avatar are missing or empty in config.json');
    }

    try {
        await rest.patch(Routes.user(), { body });
        console.log('Banner and avatar set successfully 🎉');
    } catch (error) {
        console.error('Error setting banner and avatar:', error);
    }
}

setBannerAndAvatar();