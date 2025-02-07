import React, {FC} from 'react';
import Form from "next/form";

const CarForm:FC=  () => {
    return (
        <Form style={{position: 'fixed'}} action={'/cars'}>
            <input type="text" name="brand" placeholder="Brand"/>
            <input type="text" name="price" placeholder="Price"/>
            <input type="text" name="year" placeholder="Year"/>
            <button>Add</button>
        </Form>
    );
};

export default CarForm;