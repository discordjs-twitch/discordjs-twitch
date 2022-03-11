export interface Options {
  credentials: TwitchCredentials;
  dbName?: string;
  dbPath?: string;
  debug?: boolean;
}

/**
 * Module Options
 * @typedef {Object} Options
 * @prop {TwitchCredentials} credentials {@link https://dev.twitch.tv/console/apps|Twitch Credentials}
 * @prop {string} [DBName] Database Name
 * @prop {string} [DBPath] Database Path
 * @prop {boolean} [debug] Debug Mode
 */

export interface TwitchCredentials {
  clientID: string;
  clientSecret: string;
}

/**
 * Twitch Credentials
 * @typedef {Object} TwitchCredentials
 * @prop {string} clientID Twitch Client ID
 * @prop {string} clientSecret Twitch Client Secret
 */

export interface GuildData {
  streamers: StreamerObject[];
  channelID: string;
}

/**
 * Guild Data
 * @typedef {Object} GuildData
 * @prop {StreamerObject[]} streamers Twitch Streamers Array
 * @prop {string} channelID Channel ID where notifications will be posted
 */

export interface StreamerObject {
  name: string;
  latestStream: string | null;
}

/**
 * Streamer Object
 * @typedef {Object} StreamerObject
 * @prop {string} name Streamer Username
 * @prop {string|null} latestStream Latest Stream
 */

export interface ManagerEvents {
  streamStarted: (data: StreamData) => void;
}

export interface StreamData {
  username: string;
  profile_pic: string;
  title: string;
  thumbnail: string;
  date: number;
}

/**
 * Stream Data Object
 *
 * @typedef {Object} StreamerData
 * @prop {string} username Streamer Username
 * @prop {string} profile_pic Profile Avatar
 * @prop {string} title Stream Name
 * @prop {string} thumbnail Stream Thumbnail
 * @prop {number} date When stream started
 */

export interface ErrorObject {
  status: boolean;
  message: string;
}

/**
 * Error Object
 * @typedef {Object} ErrorObject
 * @prop {boolean} status Status
 * @prop {string} message Returned Message
 */

/**
 * Emiited when Someone started a Stream
 *
 * @event Manager#streamStarted
 * @param {StreamData} data Stream Object
 */
