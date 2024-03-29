const Advertisement = ({ adImageUrl }) => {
  return (
    <div className="player-card m-2">
      <img className="w-full p-2" src={adImageUrl} alt="Advertisement" />
      <h1 className="text-center font-bold">Advertisement title</h1>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          deserunt adipisci nihil eum. Exercitationem impedit mollitia
          repellendus, inventore delectus non.
        </p>
      </div>
    </div>
  );
};
export default Advertisement;
