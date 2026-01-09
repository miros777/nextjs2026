import React from 'react';
import {getCars} from "@/services/api.services.cars";

const CarsComponent = async () => {

    const cars = await getCars();

    return (
        <div>
            {cars && cars.map((car) => (
                <div key={car.id}>
                    <div>{car.id}</div>
                    <div>{car.brand}</div>
                    <div>{car.price}</div>
                    <div>{car.year}</div>
                    <hr/>
                </div>

            ))}
        </div>
    );
};

export default CarsComponent;