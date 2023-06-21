import getCharacters from "./routes/getCharacters";

const Main = async () => {
  const characters = await getCharacters();
  return (
    <ul>
      {characters.results.map(({ name, status }: any) => (
        <>
          <li>{name}</li>
          <li>{status}</li>
        </>
      ))}
    </ul>
  );
};

export default Main;
