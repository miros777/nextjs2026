import FormComponentCreateNewCar from "@/components/form/FormComponentCreateNewCar";
import CarsComponentFromDB from "@/components/cars/CarsComponentFromDB";

const Page = () => {

    return (
        <div>
            <FormComponentCreateNewCar/>

            <h2>All current DB Cars from DB</h2>
            <CarsComponentFromDB/>
        </div>

    );
};

export default Page;