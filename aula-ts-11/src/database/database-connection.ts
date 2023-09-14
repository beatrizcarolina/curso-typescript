import pg from "pg";

const { Pool } = pg;

const configDatabase = {
    connectionString: "URL",
};

export const db = new Pool(configDatabase);