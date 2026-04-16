import { useRouter } from "next/router";

const HalamanBlog = () => {
const { query } = useRouter();
  
  return (
    <div>
      <h1>Halaman Detail Blog</h1>
      <p>Artikel: {query.slug}</p>
    </div>
  );
};

export default HalamanBlog;