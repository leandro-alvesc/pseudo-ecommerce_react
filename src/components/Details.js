import React, { Component } from 'react'
import { ConsumerProduto } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
    render() {
        return (
            <ConsumerProduto>
                {(value)=>{
                    const {id, name, price, score, image, inCart} = value.detalheProduto;
                    return (
                        <div className="container py-5">
                            {/* titulo */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-green">
                                    <h1>{name}</h1>
                                </div>
                            </div>
                            {/* fim titulo */}
                            {/* info produto */}
                            <div className="row">
                                {/* img produto */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={image} className="img-fluid" alt="produto" />
                                </div>
                                {/* det produto */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>jogo: {name}</h2>
                                    <h4 className="text-green">
                                        preço: <span>R$</span>{price}
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">score: {score}</p>
                                    {/* botoes */}
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>
                                                voltar
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        cart
                                        disabled={inCart?true:false}
                                        onClick={()=>{
                                            value.addToCart(id)
                                            value.openModal(id);
                                        }}
                                        >
                                            {inCart ? "No Carrinho" : "Adicionar ao Carrinho"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ConsumerProduto>
        )
    }
}
