import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="mrjouts"
        initialIsFollowing={true}
      >
        Emiliano Hotes
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowing={false}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        isFollowing
        userName="pheralb"
        name="Pablo Hernandéz"
      />
      <TwitterFollowCard isFollowing userName="goncy" name="Gonzalo Pozzio" />
    </section>
  );
}

export default App;
