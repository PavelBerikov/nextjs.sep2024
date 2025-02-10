'use server';

import {axiosInstance} from "@/services/axiosService";
import {ICar} from "@/interfaces/carInterface";

/*export const addCar = async (car:ICar) => {
    return axiosInstance.post('/cars', car);
}*/
export const loadCars = async ():Promise<ICar[]> => {
    return axiosInstance.get('/cars').then(res => res.data)
}

