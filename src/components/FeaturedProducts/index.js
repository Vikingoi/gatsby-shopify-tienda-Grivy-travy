import React from 'react';
import ProductContext from 'context/ProductContext';
import { ProductsGrid } from '../ProductsGrid';

export function FeaturedProducts() {
  const { collections } = React.useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Productos Destacados'
  );

  return (
    <section>
      <h1>Productos Destacados</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
}
