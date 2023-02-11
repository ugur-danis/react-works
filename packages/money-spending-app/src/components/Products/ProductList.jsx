import { ProductItem } from "./ProductItem";
import mockProduct from '../../mocks/mockProduct.json';

export const ProductList = () => {
    return (
        <div className="content">
            {
                mockProduct.map(product => <ProductItem key={product.id} product={product} />)
            }
        </div>
    );
};