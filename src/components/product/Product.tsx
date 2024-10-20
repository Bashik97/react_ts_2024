import React, {FC} from 'react';
import {IProductModel} from "../models/IProductModel";

type TypeProps = { item: IProductModel };
const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <img src={item.thumbnail} alt={item.title}/>
            <h2>{item.shippingInformation}</h2>
            <h2>{item.tags}</h2>
        </div>
    );
};

export default Product;