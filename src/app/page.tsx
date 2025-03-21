


export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-r from-blue-200 via-pink-200 to-teal-200 text-black">
            <header className="text-center py-12 ">
                <h1 className="text-5xl font-bold mb-2">Welcome to Our Product Showcase</h1>
                <p className="text-lg max-w-xl mx-auto mb-4">
                    Explore our top-selling products, featuring the latest in technology, fashion, and jewelry. Find
                    something you'll love!
                </p>
            </header>

            <section className="px-4 py-16  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product 1 - Phones */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="/images/webp/phone.webp"
                        alt="Phone"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Smartphone</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        A cutting-edge smartphone with a beautiful display and great camera.
                    </p>
                </div>

                {/* Product 2 - Clothes */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="/images/webp/cloths.webp"
                        alt="Clothes"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fashionable Clothes</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Stylish clothing with modern cuts and premium fabric. Perfect for any occasion.
                    </p>

                </div>

                {/* Product 3 - Jewelry */}
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <img
                        src="/images/webp/jewel.webp"
                        alt="Jewelry"
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Elegant Jewelry</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Beautiful jewelry designed to make you shine. A perfect gift for loved ones.
                    </p>
                </div>
            </section>


        </main>
    );
}
