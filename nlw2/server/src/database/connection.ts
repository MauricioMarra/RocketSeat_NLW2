import Knex from 'knex';
import path from 'path';

//knex -> migrations: tipo um controle de versão como GIT.

const db = Knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;