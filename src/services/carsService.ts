import { ICar } from "@/interfaces/carInterface";
import {axiosInstance} from "@/services/axiosService";

export const loadCars = async ():Promise<ICar[]> => {
    return axiosInstance.get('/cars').then(res => res.data)
}