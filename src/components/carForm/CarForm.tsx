'use client';

import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {ICar} from "@/interfaces/carInterface";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/validators/carValidator";
import { addCar } from '@/services/carService';

const CarForm:FC=  () => {
    const {register, handleSubmit, formState:{errors, isValid}, reset} = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidator)});
    const foo = (car: ICar) => {
        addCar(car)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(foo)}>
            <label>
                <input type="text" placeholder="Brand" {...register("brand")}/>
                {errors.brand && <div>{errors.brand.message}</div>}
            </label>
            <label>
                <input type="text" placeholder="Price" {...register("price")}/>
                {errors.price && <div>{errors.price.message}</div>}
            </label>
            <label>
                <input type="number" placeholder="Year" {...register("year")}/>
                {errors.year && <div>{errors.year.message}</div>}
            </label>
            <button disabled={!isValid}>Add</button>
        </form>
    );
};

export default CarForm;