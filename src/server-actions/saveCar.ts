'use server';

import sql from "better-sqlite3";
import { revalidatePath } from "next/cache";
import Joi from "joi";
import {carSchema} from "@/validation/car.validation";
const db = sql("cars.db");

// Визначаємо тип повернення для TypeScript
type SaveCarResult = {
    success: boolean;
    errors?: Joi.ValidationErrorItem[];
} | null; // Додано null, щоб відповідати initialState useActionState

export const saveCar = async (
    prevState: SaveCarResult, // Додано цей параметр для useActionState
    formData: FormData
): Promise<SaveCarResult> => {
    console.log("saveAction");

    const dataToValidate = Object.fromEntries(formData.entries());

    // --- ПОЧАТОК ВИПРАВЛЕННЯ Joi ОШИБОК ---
    // Видаляємо службові поля Next.js/React з об'єкта ПЕРЕД валідацією
    for (const key in dataToValidate) {
        if (key.startsWith('$ACTION_')) {
            delete dataToValidate[key];
        }
    }
    // --- КІНЕЦЬ ВИПРАВЛЕННЯ Joi ОШИБОК ---

    const { error, value } = carSchema.validate(dataToValidate, {
        abortEarly: false,
    });

    if (error) {
        console.error(error.details);
        return { success: false, errors: error.details };
    }

    console.log("Дані валідовані:", value);

    // Використовуємо валідовані дані (value) напряму, а не formData.get() ще раз
    db.prepare(
        `insert into cars(brand, price, year)
                VALUES (?, ?, ?)`
    ).run(value.brand, value.price, value.year);

    revalidatePath("/");

    return { success: true };
};