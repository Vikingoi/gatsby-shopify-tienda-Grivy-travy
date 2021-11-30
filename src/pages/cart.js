import React from "react";
import {Layout, CartContents, SEO} from "components";

export default function CartPage(){
    return (
        <Layout>
            <SEO description="Carrito Griby & Traby" title="Carrito"/>
            <CartContents/>
        </Layout>
    );
}