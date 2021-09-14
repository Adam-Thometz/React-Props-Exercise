const Person = ({name, age, hobbies = []}) => {
  let voteMsg;
  if (age > 18) {
    voteMsg = "Please go vote!";
  } else {
    voteMsg = "you must be 18";
  }

  if (name.length > 8) name = name.slice(0,6);

  let hobbyList;
  if (!hobbies.length) {
    hobbyList = <p>This person has no hobbies</p>
  } else {
    hobbyList = hobbies.map(h => <li>{h}</li>)
  };

  return (
    <div>
      <br />
      <p>Learn more information about this person</p>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <ul>
        {hobbyList}
      </ul>

      <h3>{voteMsg}</h3>
      <br />
    </div>
  );
}