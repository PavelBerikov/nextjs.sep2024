import {ICar} from "@/interfaces/carInterface";
import {axiosInstance} from "@/services/axiosService";

export const addCar = async (car: ICar):Promise<ICar> => {
    return await axiosInstance.post<ICar>('cars', car).then((res) => res.data)
}