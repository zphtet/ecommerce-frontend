import getCategories from "@/actions/get-categories";
import Navlink from "./link";
import { CategoryType } from "@/types";

const NavLinks = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("data");
    }, 2000);
  });
  const categories = await getCategories();
  // console.log(categories);
  if (categories.data.length === 0) return null;
  return (
    <ul className="flex items-center gap-5">
      {categories.data.map((category: CategoryType) => {
        return (
          <li key={category.id}>
            <Navlink
              href={`/${category.id}`}
              label={category.name.toLocaleLowerCase()}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
