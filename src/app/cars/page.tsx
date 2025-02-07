import {FC} from "react";
import CarForm from "@/components/carForm/CarForm";
import Cars from "@/components/cars/Cars";
import { addCar } from "@/server-actions/serverActions";

type Props = {
    searchParams: Promise<{
        [key: string]: string | string[] | undefined;
    }>
}

const CarsPage:FC<Props> = async ({searchParams}) => {
    const awaited = await searchParams
    await addCar(awaited)

    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export default CarsPage;