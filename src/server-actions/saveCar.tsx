"use server";

import sql from "better-sqlite3";
import {revalidatePath} from "next/cache";
import ICar from "@/models/ICar";
const db = sql('cars.db')

export const saveCar = async (formData: FormData)=>{
    console.log(formData);
    console.log('saveAction');

    const carBrand = formData.get('brand');
    const carPrice = Number(formData.get('price'));
    const carYear = Number(formData.get('year'));

    db.prepare(`insert into cars(brand, price, year)
                VALUES (?, ?, ?)
    `).run(carBrand, carPrice, carYear);
    // redirect('asghagfsd')
    revalidatePath('/');
}


export const getAllCarsFromDB = async ():Promise<ICar[]> => {
    return db.prepare<ICar[]>('select * from cars').all() as ICar[];
}