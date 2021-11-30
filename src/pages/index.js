import React from 'react';
import { Layout, HomepageCollectionsGrid, FeaturedProducts, SEO } from 'components';
import ProductContext from "context/ProductContext";

const IndexPage = () => {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);
  
  return (
    <Layout>
      <SEO description="Tienda Griby & Traby" title="Inicio"/>
      <HomepageCollectionsGrid 
        collections={collections.filter(
        collection => collection.title !== 'Productos Destacados'
      ) }
      />
      {!!collections.find(
        collection => collection.title === 'Productos Destacados'
        ) && <FeaturedProducts/> }
  </Layout>
  );
};

export default IndexPage;
