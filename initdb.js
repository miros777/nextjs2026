// eslint-disable-next-line @typescript-eslint/no-require-imports
const sql = require('better-sqlite3');
const db = sql('cars.db');

const dummyCars = [
    {
        brand: 'BMW',
        price: 5000,
        year: 2000

    },
    {
        brand: 'LADA',
        price: 1000,
        year: 2010
    },
];

db.prepare(`
    CREATE TABLE IF NOT EXISTS cars
    (
        id INTEGER PRIMARY KEY AUTOINCREMENT,

        brand TEXT,
        price INTEGER,
        year INTEGER

    )
`).run();

async function initData() {
    const stmt = db.prepare(`
        INSERT INTO cars
        VALUES (null,
                @brand,
                @price,
                @year
               
               
               )
    `);

    for (const car of dummyCars) {
        stmt.run(car);
    }
}

initData();