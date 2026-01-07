import React from 'react';
import Form from "next/form";
import {getAllCarsFromDB, saveCar} from "@/server-actions/saveCar";
import ICar from "@/models/ICar";

const Page = async () => {

    const carsFromDB = await getAllCarsFromDB();
    return (
        <div>
            <h2>Form to created new cat to our SQLITE DB</h2>
            <Form action={saveCar}>
                <input type="text" name="brand" placeholder="brand" />
                <input type="number" name="price" placeholder="price" />
                <input type="number" name="year" placeholder="year" />
                <button type="submit">Add Car</button>
            </Form>


            <div>

                {carsFromDB.map((car: ICar) => (
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

export default Page;