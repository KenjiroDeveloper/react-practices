import { Mouse, Menu } from "lucide-react";
export const Header = () => {
  return (
    <header className="flex justify-between w-full sm:w-4/5 px-4 py-2 mx-auto">
      <div className="flex">
        <Mouse></Mouse>
        <h2 className="mx-3">CPS Counter</h2>
      </div>

      <div>
        <button className="align-middle">
          <Menu></Menu>
        </button>
      </div>
    </header>
  );
};
