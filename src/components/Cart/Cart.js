import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ConsumerProduto } from '../../context'
import CartList from './CartList'
import CartTotal from './CartTotal'

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ConsumerProduto>
                    {value => {
                        const { cart } = value;
                        if(cart.length > 0){
                            return(
                                <>
                                    <Title name="seu" title="carrinho"/>
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </>
                            )
                        }
                        else{
                            return(
                                <>
                                    <EmptyCart />
                                </>
                            )
                        }
                    }}
                </ConsumerProduto>
                
            </section>
        )
    }
}
