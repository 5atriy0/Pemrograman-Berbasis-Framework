import { useRouter } from "next/router";

const halamanToko = () => {
//   const Router = useRouter();
//   console.log(Router);
    const { query } = useRouter();
    const slug = query.slug as string[] | undefined;
  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>
        Toko: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`} <br />
        Kategori: {slug ? slug[0] : "Semua Kategori"} 
        </p>
    </div>
  );
};

export default halamanToko;