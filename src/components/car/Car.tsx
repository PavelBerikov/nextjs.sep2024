import { ICar } from '@/interfaces/carInterface';
import {FC} from 'react';

type PropsType = {
    car: ICar
};

const Car: FC<PropsType> = ({car}) => {
    return (
        <div>
            <div>{car.id}</div>
            <div>{car.brand}</div>
            <div>{car.price}</div>
            <div>{car.year}</div>
            <hr/>
        </div>
    );
};

export default Car;