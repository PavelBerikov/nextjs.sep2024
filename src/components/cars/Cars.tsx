import { loadCars } from "@/services/carsService";
import Car from "@/components/car/Car";


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