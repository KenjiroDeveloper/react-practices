export const InfoSlot = ({ infoName, infoValue }) => {
  return (
    <div className="flex justify-center flex-1 h-fit bg-indigo-900 rounded-lg p-2">
      <p className="font-light">
        {infoName} <span className="font-bold">{infoValue}</span>
      </p>
    </div>
  );
};
