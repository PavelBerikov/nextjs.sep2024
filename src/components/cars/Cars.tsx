import Car from "@/components/car/Car";
import {loadCars} from "@/server-actions/serverActions";


const Cars = async () => {
    const cars = await loadCars();
    return (
        <div>
            {
                cars.map((car) => <Car car={car} key={car.id} />)
            }
        </div>
    );
};

export default Cars;