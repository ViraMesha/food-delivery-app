export const Orders = () => {
  return (
    <section className="p-10 h-[calc(100vh-6rem)] lg:h-[calc(100vh-7.6rem)]">
      <div className="wrapper">
        <table className="w-full border-separate border-spacing-3">
          <thead>
            <tr className="text-left">
              <th className="hidden md:block">Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th className="hidden md:block">Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm md:text-base bg-red-50">
              <td className="hidden md:block py-6 px-1">125425</td>
              <td className="py-6 px-1">15.03.2023</td>
              <td className="py-6 px-1">86</td>
              <td className="hidden md:block">
                Pasta Carbonara (2), Pizza Beef and Crispy(3), Crispy Chicken
                burger(2)
              </td>
              <td className="py-6 px-1">On the way (approx. 10 min)...</td>
            </tr>
            <tr className="text-sm md:text-base odd:bg-teal-50">
              <td className="hidden md:block py-6 px-1">125425</td>
              <td className="py-6 px-1">15.03.2023</td>
              <td className="py-6 px-1">86</td>
              <td className="hidden md:block">
                Pasta Carbonara (2), Pizza Beef and Crispy(3), Crispy Chicken
                burger(2)
              </td>
              <td className="py-6 px-1">On the way (approx. 10 min)...</td>
            </tr>
            <tr className="text-sm md:text-base odd:bg-teal-50">
              <td className="hidden md:block py-6 px-1">125425</td>
              <td className="py-6 px-1">15.03.2023</td>
              <td className="py-6 px-1">86</td>
              <td className="hidden md:block">
                Pasta Carbonara (2), Pizza Beef and Crispy(3), Crispy Chicken
                burger(2)
              </td>
              <td className="py-6 px-1">On the way (approx. 10 min)...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
