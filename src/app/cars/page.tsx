import {FC} from "react";
import CarForm from "@/components/carForm/CarForm";
import Cars from "@/components/cars/Cars";
import { addCar } from "@/server-actions/serverActions";
import {ICar} from "@/interfaces/carInterface";

type Props = {
    searchParams: Promise<ICar>
}

const CarsPage:FC<Props> = async ({searchParams}) => {
    const awaited = await searchParams
    console.log(awaited)
    await addCar(awaited)

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;