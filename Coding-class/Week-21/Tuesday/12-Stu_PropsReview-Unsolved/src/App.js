import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
import FriendsCard from "./components/FriendsCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    {friends.map(friend => <FriendsCard 
                                        key={friend.id}
                                        id={friend.id}
                                        name={friend.name}
                                        image={friend.image}
                                        occupation={friend.occupation}
                                        location={friend.location}
    />)}
  </Wrapper>
);

export default App;
