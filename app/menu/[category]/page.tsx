import PizzasList from "@/components/MenuCategory/PizzasList";

// const getData = async (category: string) => {
//   const res = await fetch(
//     `http://localhost:3000/api/products?category=${category}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) throw new Error("Failed!");

//   return res.json();
// };

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  // const products = await getData(params.category);

  return (
    <section className="py-10 md:py-20 xl:py-30">
      <div className="wrapper">
        <PizzasList />
      </div>
    </section>
  );
};

export default CategoryPage;
