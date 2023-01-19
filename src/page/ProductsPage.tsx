import React from 'react'
import { Product } from "../components/Product"
import { products } from '../data/products'
export function ProductPage() {

    return (
        <div className="Container">
            <div className="Container-Background">
                <div className="Container-Title">Ты сегодня покормил кота?</div>
                <div className="Container-ProductList">
                    {products.map(prod => <Product product={prod} key={prod.id} />)}
                </div>
            </div>
        </div>)

}