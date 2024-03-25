import { MdEdit } from "react-icons/md";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  orders: OrderT[];
  isAdmin: Boolean | undefined;
};

export const Orders = ({ orders, isAdmin }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({ id, status });
  };

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
                {isAdmin ? (
                  <td className="py-6 px-1">
                    <form
                      action=""
                      className="flex items-center justify-center gap-4"
                      onSubmit={(e) => handleUpdate(e, id)}
                    >
                      <input
                        placeholder={status}
                        className="p-2 ring-1 ring-teal-800 rounded-md"
                      />
                      <button className="bg-teal-600 p-2 rounded-full">
                        <MdEdit className="text-2xl text-white" />
                      </button>
                    </form>
                  </td>
                ) : (
                  <td className="py-6 px-1">{status}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
