function Hello({ person }) {
  return (
    <div className="App">
      <h1>
        {person.message} {person.name} {person.emoji}
        {person.seatnumbers}
      </h1>
    </div>
  );
}

export default Hello;
