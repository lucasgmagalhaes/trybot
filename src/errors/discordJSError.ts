import { Errors } from "./defaults";

/**
 * Related to a [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) error.
 */
export class DiscordJSError extends Error {
  /**
   * Throws when any type of operation executed by discord.js fails.
   * @param message Custom message for this error.
   */
  constructor(message = Errors.DISCORD_ERROR_MESSAGE) {
    super(message);
    this.name = Errors.DISCORD_ERROR;
  }
}
