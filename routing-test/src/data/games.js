import topDown1 from "../images/top-down-example-1.jpeg";
import topDown2 from "../images/top-down-example-2.jpeg";
import neonLanes from "../images/neon-lanes.jpg";
import karen from "../images/karen-the-game.png";
import comingSoon from "../images/coming-soon.jpeg";

const games = [
  {
    id: "neon-apex",
    name: "Neon Apex",
    genre: "Racing",
    status: "In Progress",
    image: topDown1
  },
  {
    id: "neon-lanes",
    name: "Neon Lanes",
    genre: "Arcade",
    status: "Released",
    image: neonLanes
  },
  {
    id: "traffic-runner",
    name: "Traffic Runner",
    genre: "Driving",
    status: "Planned",
    image: topDown2
  },
  {
    id: "demolition-arena",
    name: "Demolition Arena",
    genre: "Action",
    status: "Planned",
    image: comingSoon
  },
  {
    id: "neon-knights",
    name: "Neon Knights",
    genre: "Adventure",
    status: "Future",
    image: comingSoon
  },
  {
    id: "ice-man",
    name: "Ice Man",
    genre: "Adventure",
    status: "Future",
    image: comingSoon
  },
  {
    id: "brain-journey",
    name: "Brain-Journey",
    genre: "RPG",
    status: "Beyond",
    image: comingSoon
  },
  {
    id: "karen",
    name: "Karen",
    genre: "Action",
    status: "Beyond",
    image: karen
  }
];

export default games;