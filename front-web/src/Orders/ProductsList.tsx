import "./styles.css";
import ProductCard from "./ProductCard";
import { Product } from "./types";
import { checkIsSelected } from "./helper";

type Props = {
    products: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

export default function ProductsList({ products, onSelectProduct, selectedProducts } : Props) {
    return(
        <div className='orders-list-container'>
            <div className='orders-list-items'>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} 
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts,product)}/>
                ))}
            </div>
        </div>
    )
}