import React from 'react';
import {CollectionTile} from "../CollectionTile";
import {RemainingCollections} from  "./styles";

const collectionName = 'OFERTA';
export function HomepageCollectionsGrid ({collections}) {
    const saleCollection= collections.find(collection => collection.title === collectionName );
    const remainingCollections= collections.filter(
        collection => collection.title !== collectionName );
    return (
        <div>
            {!!saleCollection && (
                <CollectionTile
                sale
                title={saleCollection.title}
                description={saleCollection.description}
                backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
          />
            )}
            <RemainingCollections>
            {remainingCollections.map(collection => (
              <CollectionTile
                title={collection.title}
                description={collection.description}
                backgroundImage={collection.image.localFile.childImageSharp.fluid}
                key={collection.shopifyId}
          />
            ))}  
            </RemainingCollections>
        </div>
    );
}
