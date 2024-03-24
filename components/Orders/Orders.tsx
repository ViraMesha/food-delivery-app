type Props = {
  orders: OrderT[];
};
export const Orders = ({ orders }: Props) => {
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
            {orders.map(({ id, createdAt, price, products, status }) => (
              <tr
                className="text-sm md:text-base bg-red-50 odd:bg-teal-50"
                key={id}
              >
                <td className="hidden md:block py-6 px-1">{id}</td>
                <td className="py-6 px-1">
                  {createdAt.toString().slice(0, 10)}
                </td>
                <td className="py-6 px-1">{price}</td>
                <td className="hidden md:block">{products[0].name}</td>
                <td className="py-6 px-1">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
