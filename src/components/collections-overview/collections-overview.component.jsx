import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector";

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollections}) => (
                <CollectionPreview key={id} {...otherCollections} />
            ))}
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)