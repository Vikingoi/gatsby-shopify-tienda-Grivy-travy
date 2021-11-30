import React from "react";
import { Layout,Filters, ProductsGrid, SEO } from "components";
import ProductContext from "context/ProductContext";
import styled from "styled-components";
import queryString from "query-string";
import {useLocation} from "@reach/router";

const Content= styled.div`
    display: grid;
    grid-gap: 20px;
    margin-top: 20px;
    grid-template-columns: 1fr 3fr;
`;

export default function AllProducts(){
    const {products, collections} = React.useContext(ProductContext);
    const collectionProductMap={};
    const{search} = useLocation();
    const qs= queryString.parse(search);
    const selectedCollectionIds= qs.c?.split(',').filter(c => !!c) || [];
    const selectedCollectionIdsMap={};
    const searchTerm=qs.s;

    selectedCollectionIds.forEach(collectionId => {
        selectedCollectionIdsMap[collectionId] = true;
    });

    if(collections){
        collections.forEach(collection => {
            collectionProductMap[collection.shopifyId] = {};

            collection.products.forEach(product => {
                collectionProductMap[collection.shopifyId][product.shopifyId] = true;
            });
        });
    }
    console.log(collectionProductMap);

    const filterByCatergory =product=>{
        if(Object.keys(selectedCollectionIdsMap).length){
            for(let key in selectedCollectionIdsMap){
                if(collectionProductMap[key]?.[product.shopifyId]){
                    return true;
                }
            }
            return false;
        }
        return true;
    };
    const filterBySearchTerm = product =>{
        if(searchTerm){
            return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        }

        return true;
    }

    const filteredProducts = products
    .filter(filterByCatergory)
    .filter(filterBySearchTerm);

    return(
        <Layout>
            <SEO description="Productos Griby & Traby" title="Todos los productos"/>
            {!!searchTerm && !!filteredProducts.length && (
                <h3>
                    Termino de busqueda: <strong>'{searchTerm}'</strong>
                </h3>
            )}
            {!!filteredProducts.length && <h4>{filteredProducts.length} productos </h4> }
            
            <Content>
                <Filters />
                {!filteredProducts.length &&
                    <div>
                       <h3>
                         <span>
                            ¡Oh No! Ningun producto coincide con la busqueda:
                        </span>   
                        &nbsp;
                        <strong>
                            '{searchTerm}'
                        </strong>
                        </h3> 
                        <div>
                           Para ayudarte con la busqueda  ¿Porque no pruebas?:
                           <br />
                           <br />
                           <ul>
                               <li>
                                   Revisa tu ortografia
                               </li>
                               <li>
                                   Usando menos palabras
                               </li>
                               <li>
                                   Intenta usar otro termino de busqueda
                               </li>
                           </ul>
                        </div>
                    </div>
                }
                {!!filteredProducts.length && (
                    <div>
                        <ProductsGrid products={filteredProducts}/>
                    </div>
                )}
                
            </Content>
        </Layout>
    );
}