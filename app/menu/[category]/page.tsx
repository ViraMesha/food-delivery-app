import PizzasList from "@/components/MenuCategory/PizzasList";

const CategoryPage = () => {
  return (
    <section className="py-10 md:py-20 xl:py-30">
      <div className="wrapper">
        <PizzasList />
      </div>
    </section>
  );
};

export default CategoryPage;
