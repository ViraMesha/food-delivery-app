import { Menu } from "@/components/Menu";
import { menuItems } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Failed!");

//   return res.json();
// };

const MenuPage = async () => {
  // const menuItems: MenuItem[] = await getData();
  return <Menu menuItems={menuItems} />;
};

export default MenuPage;
