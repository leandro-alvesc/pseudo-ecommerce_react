import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'
import { ConsumerProduto } from '../context'
import { produtosJogos } from '../data'

export default class ProductList extends Component {
    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="jogos" title="disponíveis" />
                        <div>
                            <ConsumerProduto>
                                {value => {
                                    const {sortName,sortPrice,sortScore} = value;
                                    return (
                                        <p>
                                        Ordenar por: 
                                        <span className="btn btn-black mx-1" onClick={()=>sortName()}>Nome</span>
                                        <span className="btn btn-black mx-1" onClick={()=>sortPrice()}>Preço</span>
                                        <span className="btn btn-black mx-1" onClick={()=>sortScore()}>Score</span>
                                    </p>
                                    )
                                }}
                            </ConsumerProduto>
                        </div>
                        <div className="row">
                            <ConsumerProduto>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ConsumerProduto>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}