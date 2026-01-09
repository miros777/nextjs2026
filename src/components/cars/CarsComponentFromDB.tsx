import React from 'react';
import {getAllCarsFromDB} from "@/server-actions/getAllCarsFromDB";
import ICar from "@/models/ICar";

const CarsComponentFromDB = async () => {
    const carsFromDB = await getAllCarsFromDB();

    return (
        <div>
            <div>

                {carsFromDB
                    .slice() // Створюємо копію масиву перед сортуванням
                    .sort((a:ICar, b:ICar) => (b.id - a.id)) // Сортуємо за брендом (A-Z)
                    .map((car: ICar) => (
                        <div key={car.id}>
                            <div>{car.id}</div>
                            <div>{car.brand}</div>
                            <div>{car.price}</div>
                            <hr/>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CarsComponentFromDB;