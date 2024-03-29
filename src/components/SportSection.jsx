import PlayerCard from "./image";
import Advertisement from "./Advertisement";

const SportsSection = ({ athletes, advertisement }) => {
  return (
    <div className="flex flex-wrap items-start dark">
      {athletes.map((athlete, index) => (
        <PlayerCard
          key={index}
          playerImage={athlete.playerImage}
          teamName={athlete.teamName}
          sport={athlete.sports}
          totalEvents={athlete.totalEvents}
        />
      ))}
      <Advertisement adImageUrl={advertisement.adImageUrl} />
      <div className="w-full text-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-300">
          See More
        </button>
      </div>
    </div>
  );
};

export default SportsSection;
