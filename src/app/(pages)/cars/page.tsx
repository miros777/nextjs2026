import ICar from "@/models/ICar";
import {getCars} from "@/services/api.services.cars";


const Page = async () => {

    const cars = await getCars();
    return (
        <div>
            <h2>Cars From API</h2>
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

export default Page;