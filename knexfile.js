const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migration: {
        director: './data/migration'
    },
    pool: {
        afterCreate: (conn, done) =>
            conn.run('PRAGMA foreign_keys = ON', done)
    }
}

module.exports = {
    development: {
        ...sharedConfig,
        connection: {
            filename: './data/cokk_book.db3'
        },
        seeds: {
            director: './data/seeds'
        }
    },
    testing: {
        ...sharedConfig,
        connection: {
            filename: './data/cook_book.test.db3'
        }
    },
    production: {
        
    }
}