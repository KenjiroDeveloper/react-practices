
export const GridLayout = ({children}) => {
  return (

    <section className=" mx-0 sm:mx-auto sm:w-9/12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
       {children}
      </div>
    </section>
  );
};
