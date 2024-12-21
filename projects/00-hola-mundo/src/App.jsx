import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "mrjouts", name: "Emiliano Hotes", isFollowing: true },
  { userName: "midudev", name: "Miguel Ángel Durán", isFollowing: false },
  { userName: "pheralb", name: "Pablo Hernandéz", isFollowing: true },
  { userName: "goncy", name: "Gonzalo Pozzio", isFollowing: false },
];

function App() {
  return (
    <section className="App">
      {users.map(({ userName, isFollowing, name }) => (
        <TwitterFollowCard
          key={userName}
          initialIsFollowing={isFollowing}
          userName={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
