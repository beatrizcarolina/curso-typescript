import { Game, CreateGame } from "../protocols/game-protocol";
import { db } from "../database/database-connection";

async function getGames() {
  const result = await db.query<Game>("SELECT * FROM games");
  return result.rows;
}

async function createGame(game: CreateGame) {
  return await db.query("INSERTO INTO games (title, platform) VALUES ($1, $2)", [game.title, game.platform]);
}

async function getGameByTitleAndPlatform(game: CreateGame) {
  const result = await db.query<Game>("SELECT * FROM games WHERE title = $1 AND platform = $2", [game.title, game.platform]);
  return result.rows[0];
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;