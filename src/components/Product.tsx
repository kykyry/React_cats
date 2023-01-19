import React, { useState } from "react"
import { Iproduct, ProductProps } from "../product";

export function Product({ product }: ProductProps) {
    const [selected, setSelected] = useState(false)
    const [hover, setHover] = useState(false)
    const [left, setLeft] = useState(false)
    const ProductState = selected ? "ProductSelected" : ""
    const ProductAvailability = product.disable ? "ProductDisable" : ""

    return (<div className="ProductList-Item">
        <div className={ProductState + ProductAvailability + " ProductList-Item_ProductCard"} onMouseEnter={() => setHover(state => !state)}
            onMouseLeave={() => { setHover(false); setLeft(true) }} onClick={() => product.disable ? setSelected(state => state) : (setSelected(state => !state), setLeft(false))}>
            {(left && selected && hover) ? <p className="ProductCard-Elem ProductCard-Elem_delete">{product.intro.wantToDelete}</p>
                : <p className="ProductCard-Elem ProductCard-Elem_intro">{product.intro.default}</p>}
            <p className="ProductCard-Elem ProductCard-Elem_title">{product.title}</p>
            <p className="ProductCard-Elem ProductCard-Elem_taste">{product.taste}</p>
            <p className="ProductCard-Elem ProductCard-Elem_gift"><b>{product.gift.portion}</b>
                {product.gift.portion % 10 === 1 ? " порция" :
                    (product.gift.portion % 10 <= 4 && !!(product.gift.portion % 10)) ? " порции" : " порций"}</p>
            <p className="ProductCard-Elem ProductCard-Elem_gift">
                {product.gift.mouse === 1 ? "" : <b>{product.gift.mouse}</b>}
                {product.gift.mouse % 10 === 1 ? "мышь" : product.gift.mouse % 10 <= 4 ? " мыши" : " мышей"} в подарок</p>
            {product.gift.extra &&
                <p className="ProductCard-Elem ProductCard-Elem_gift">{product.gift.extra}</p>}
            <div className="ProductCard-Elem ProductCard-Elem_weight">
                <p className="ProductCard-Elem_weight_unit">{product.weight}</p>
                <p className="ProductCard-Elem_weight_measure">кг</p>
            </div>
        </div>
        {product.disable ? <p className="ProductCard-Elem ProductCard-Elem_disable">Печалька, {product.taste} закончился.</p> :
            selected ? <p className="ProductCard-Elem ProductCard-Elem_details">{product.description}</p> :
                <p className="ProductCard-Elem ProductCard-Elem_appendix">{product.buyLink.text} <span className="Elem-link" onClick={() => setSelected(true)}> {product.buyLink.link}</span></p>}
    </div>
    )
}