---
order: 1
authors: 
  - JorelAli
  - misode
  - DerEchtePilz
---

# Chat arguments

The CommandAPI provides a number of ways to interact with chat formatting in Minecraft. These are the following:

- **ChatColor**: The color of text rendered in Minecraft
- **Chat**: Text which is said in chat. This also includes entity selectors such as `@a` and `@r`
- **ChatComponent**: Minecraft's [Raw JSON text format](https://minecraft.wiki/w/Raw_JSON_text_format)

The CommandAPI implements **ChatColor**, **Chat** and **ChatComponent** in two separate ways: [Spigot-compatible](./spigot-chat-arguments) and [Adventure-compatible](./adventure-chat-arguments). The differences between these and how to use them are described in their own relevant pages.