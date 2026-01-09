import ICar from "@/models/ICar";
import sql from "better-sqlite3";
const db = sql('cars.db')

export const getAllCarsFromDB = async ():Promise<ICar[]> => {
    return db.prepare<ICar[]>('select * from cars').all() as ICar[];
}