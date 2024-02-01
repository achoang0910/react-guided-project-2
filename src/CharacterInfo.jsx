function CharacterInfo({character}) {
  return (
    <div>
      <p></p><span>{character.name}</span>
      <span>{character.gender}</span>
      <span>{character.homeworld}</span>
      <span>{character.birth_year}</span>
    </div>
  );
}

export default CharacterInfo;

db["films-characters"].aggregate([
  {
    $match: {
      film_id: 5,
    },
  },
  {
    $lookup: {
      from: "films",
      localField: "film_id",
      foreignField: "id",
      as: "film_matches",
    },
  },
  {
    $lookup: {
      from: "characters",
      localField: "character_id",
      foreignField: "id",
      as: "character_matches",
    },
  },
  {
    $unwind: "$character_matches",
  },
  {
    $replaceRoot: {
      newRoot: "$character_matches",
    },
  },
]);