function CharacterInfo({character}) {
  return (
    <div>
      <span>{character.name}</span>
      <span>{character.gender}</span>
      <span>{character.homeworld}</span>
      <span>{character.birth_year}</span>
    </div>
  );
}

export default CharacterInfo;
