<p align=center>
    <img src="https://raw.githubusercontent.com/zingzy/discord-bot-animation/main/assets/pfp.gif" alt="Discord Bot Animation Icon">
</p>

<br>

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Bungee&size=30&pause=1000&color=7169E3&center=true&vCenter=true&random=false&width=435&lines=Discord+Bot+Animator+⚡" alt="DISCORD BOT ANIMATOR ⚡"></img>
</p>

---

<details>
<summary><strong>Table of Contents</strong></summary>

- [📌 Introduction](#-introduction)
  - [**Discord Bot Animator** is a simple script which can apply animated avatar and banner to your discord bot. It uses `discord.js` to interact with the Discord API and change the bot's avatar and banner.](#discord-bot-animator-is-a-simple-script-which-can-apply-animated-avatar-and-banner-to-your-discord-bot-it-uses-discordjs-to-interact-with-the-discord-api-and-change-the-bots-avatar-and-banner)
- [✨ Features](#-features)
- [📚 Requirements](#-requirements)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🚀 Usage](#-usage)
- [👀 Example](#-example)
- [⚠️ Warnings](#️-warnings)
- [💬 FAQs](#-faqs)
- [📜 Changelog](#-changelog)
  - [**v1.0.0** (March 19, 2024)](#v100-march-19-2024)
- [🔧 Contact \& Support](#-contact--support)

</details>

---

## 📌 Introduction

### **Discord Bot Animator** is a simple script which can apply animated avatar and banner to your discord bot. It uses `discord.js` to interact with the Discord API and change the bot's avatar and banner.

## ✨ Features

- **Change Bot's Avatar**: Apply **animated** avatar to your bot's profile.
- **Change Bot's Banner**: Apply **animated** banner to your bot's profile.

## 📚 Requirements

- **Node.js** (v16.6.0 or higher)
- **npm** (v7.20.3 or higher)
- **discord.js** (v14.1.0 or higher)

## 📦 Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/zingzy/discord-bot-animator.git
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

## ⚙️ Configuration

1. Open the `config.json` file and fill in the required fields:

    ```json
    {
        "token":"Your Bot Token",
        "avatarPath":"Local Path of the Animated Avatar",
        "bannerPath":"Local Path of the Animated Banner"
    }
    ```

    - **token**: Your bot's token. You can get it from the [Discord Developer Portal](https://discord.com/developers/applications).

    - **avatarPath**: Path of the animated avatar stored on your local machine. The file should be a `.gif` file **for the animation to work**. You can also use `.png`, `.jpg` or other standard image files **for static images**.

    - **bannerPath**: Path of the animated banner stored on your local machine. The file should be a `.gif` file **for the animation to work**. You can also use `.png`, `.jpg` or other standard image files **for static images**.

    > **For Windows users, please ensure the path is formatted like this**: `C:\\Users\\Username\\<complete-path>\\<file-name>.gif`. **Avoid using `/` in the path.**

    > **For Linux and Mac users, the path should follow this format**: `/home/username/<complete-path>/<file-name>.gif`.

## 🚀 Usage

1. **Make sure that any other instance of your bot is not running.**

    - This may cause conflicts and the changes may not be applied.

2. **Run the script**:

    ```bash
    node main.js
    ```

3. **Check your bot's profile**:

    - **Open your bot's profile on Discord and you should see the new avatar and banner.**

    - If the avatar and banner are not updated, **refresh your discord app** and **make sure that the paths in the** `config.json` **file are correct and the files are accessible**.

## 👀 Example

<p align=center>
    <img src="https://raw.githubusercontent.com/zingzy/discord-bot-animation/main/assets/example.gif" alt="Discord Bot Animation Example">
</p>

## ⚠️ Warnings

1. **Do not spam or abuse this script**

    - **Discord has strict guidelines and policies regarding bot accounts**. Applying changes to the bot's avatar and banner too frequently may result in your bot being `rate-limited` or `banned` from Discord.

2. **Do not apply NSFW content**

    - **Discord has strict guidelines and policies regarding NSFW content**. Applying NSFW content may result in your bot being directly `banned from Discord`.

## 💬 FAQs

1. **How to get the bot token?**

    - You can get the bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

2. **How to get the animated avatar and banner?**

    - You can create your own animated avatar and banner using any image editing software like Adobe Photoshop, GIMP, etc. You can also find animated avatars and banners on the internet.

3. **Is this script safe to use?**

    - Yes, this script is safe to use. It only interacts with the Discord API to change the bot's avatar and banner.

4. **Is it safe to share the bot token?**

    - No, it is not safe to share the bot token with anyone. **Here the token is stored in the `config.json` file locally and is not shared with anyone**. You can take a look at the `main.js` file to see how the token is used. **It is also reccomended to clear the token from the `config.json` file after using the script.**

5. **Can I use this script to change my profile picture?**

    - No, You cannot use this script to change your profile picture. This script is specifically designed to change the bot's avatar and banner.

6. **Can I apply NSFW avatars and banners?**

    - No, you cannot apply NSFW avatars and banners. **Discord has strict guidelines and policies regarding NSFW content**. You can refer to the [Discord Community Guidelines](https://discord.com/guidelines) for more information. Applying NSFW content may result in your bot being banned from Discord.

7. **Is this completely free and discord TOS compliant?**

    - Yes, this script is completely free and discord TOS compliant. **It does not violate any of the Discord's Terms of Service**. Discord recently added the feature to apply animated avatars and banners to bots. This script uses the same feature to apply the animated avatar and banner. You can refer to the [Discord Developer Documentation](https://discord.com/developers/docs) for more information.

## 📜 Changelog

### **v1.0.0** (March 19, 2024)

- Initial release of the script.

## 🔧 Contact & Support

If you have any queries or suggestions, feel free to reach out to me on [Discord](https://discord.com/users/869458963954020433).

---

<h6 align="center">
© zingzy . 2024

All Rights Reserved</h6>

<p align="center">
	<a href="https://github.com/zingzy/discord-bot-animator/blob/master/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=APACHE 2.0&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>