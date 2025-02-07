import { ICar } from '@/interfaces/carInterface';
import {FC} from 'react';

type PropsType = {
    car: ICar
};

const Car: FC<PropsType> = ({car}) => {
    return (
        <div>
            <div>id - {car.id}</div>
            <div>brand - {car.brand}</div>
            <div>price - {car.price}</div>
            <div>year - {car.year}</div>
            <hr/>
        </div>
    );
};

export default Car;