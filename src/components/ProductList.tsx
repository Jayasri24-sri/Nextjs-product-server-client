// components/ProductList.tsx

interface Product {
    id: string;
    name: string;
    description: string;
}

const ProductList = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.length === 0 ? (
                <div className="col-span-3 text-center text-xl text-gray-500">No products available.</div>
            ) : (
                products.map((product) => (
                    <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={`https://via.placeholder.com/300`} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-600 mt-2">{product.description}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductList;
