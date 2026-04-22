const dummyProducts = [
    { id: 1, nama: "Produk A", harga: 100000 },
    { id: 2, nama: "Produk B", harga: 200000 },
    { id: 3, nama: "Produk C", harga: 300000 },
];

const MainSection = () => {
    return (
        <section className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Daftar Produk</h2>
            <ul className="border rounded divide-y">
                {dummyProducts.map((p) => (
                    <li key={p.id} className="p-4">
                        {p.nama} - Rp {p.harga.toLocaleString("id-ID")}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MainSection;