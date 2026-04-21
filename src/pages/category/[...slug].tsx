import { useRouter } from "next/router";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Category Page</h1>
      <p>URL Parameters:</p>
      <ul>
        {slug &&
          (slug as string[]).map((item, index) => (
            <li key={index}>
              Parameter {index + 1}: {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryPage;