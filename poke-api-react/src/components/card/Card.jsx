export const Card = ({ name, types, image }) => {
  const Bubble = ({ children }) => {
    return (
      <>
        <div className="badge badge-outline">{children}</div>
      </>
    );
  };

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
       
        <div className="card-actions justify-end">
          {types.map((type) => {
            return <Bubble key={type}>{type}</Bubble>;
          })}
        </div>
      </div>
    </div>
  );
};
