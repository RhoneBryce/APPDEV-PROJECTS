import React from 'react';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    name: 'The Witcher 3: Wild Hunt',
    description:
      'An open-world action RPG set in a dark fantasy world where players control Geralt of Rivia, a monster hunter, as he seeks his adopted daughter, who is being pursued by an otherworldly force.',
    publisher: 'CD Projekt Red',
    developer: 'CD Projekt Red',
    image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg?t=1730212926',
    reviews: [
      { id: 'review_1', author: 'John Doe', text: 'An absolute masterpiece with a captivating story and beautiful world-building.' },
      { id: 'review_2', author: 'Jane Smith', text: 'The combat is fluid, and the side quests are as engaging as the main story.' },
      { id: 'review_3', author: 'Mark Lee', text: 'A long but rewarding journey, with plenty of room for exploration and discovery.' },
      { id: 'review_4', author: 'Sara Liu', text: 'Visually stunning, with an emotional narrative that resonates.' },
      { id: 'review_5', author: 'Tom Harris', text: 'A great blend of action, story, and exploration.' }
    ]
  },
  {
    id: 2,
    name: 'Minecraft',
    description:
      'A sandbox video game where players can build and explore virtual worlds made up of blocks, engage in crafting, and survive against enemies. Its simple mechanics and infinite world generation make it one of the most popular games ever created.',
    publisher: 'Mojang',
    developer: 'Mojang',
    image: 'https://media.tenor.com/2iBayblKJlsAAAAM/minecraft-minecraft-memes.gif',
    reviews: [
      { id: 'review_1', author: 'Alex Kim', text: 'A creative freedom unlike any other game. The possibilities are endless.' },
      { id: 'review_2', author: 'Jessica Wright', text: 'Great for all ages, but the grind for resources can be a bit tedious.' },
      { id: 'review_3', author: 'Chris Johnson', text: 'Minecraft is a great platform for creativity, but also for playing with friends.' },
      { id: 'review_4', author: 'Kelly Brown', text: 'The building mechanics are simple but rewarding, though multiplayer can sometimes be laggy.' },
      { id: 'review_5', author: 'Ryan Moore', text: 'Fun for hours of exploration, crafting, and fighting, though it can get repetitive at times.' }
    ]
  },
  {
    id: 3,
    name: 'Overwatch 2',
    description:
      'A team-based first-person shooter where players control a variety of unique heroes with different abilities and roles. The game emphasizes teamwork and strategy in various objective-based game modes.',
    publisher: 'Blizzard Entertainment',
    developer: 'Blizzard Entertainment',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Overwatch_2_Steam_artwork.jpg/220px-Overwatch_2_Steam_artwork.jpg',
    reviews: [
      { id: 'review_1', author: 'Mike Adams', text: 'Overwatch 2 delivers a lot of exciting new content, but the balancing issues can be frustrating.' },
      { id: 'review_2', author: 'Ella Davis', text: 'Fast-paced and fun, especially with friends, but the meta can shift frequently.' },
      { id: 'review_3', author: 'Jake Thomas', text: 'The characters are unique and well-designed, but the grind for unlocking new content is slow.' },
      { id: 'review_4', author: 'Olivia Green', text: 'The game’s atmosphere is amazing, but I wish there were more modes to play.' },
      { id: 'review_5', author: 'Ethan Clark', text: 'A great follow-up to the first game, though the matchmaking system still needs improvements.' }
    ]
  },
  {
    id: 4,
    name: 'Among Us',
    description:
      'A multiplayer party game where players work together to complete tasks aboard a spaceship, but some players are impostors trying to sabotage the mission. The goal is to identify the impostors before they succeed.',
    publisher: 'InnerSloth',
    developer: 'InnerSloth',
    image: 'https://i.guim.co.uk/img/media/15034bde9bfbb2046b88e5c05cf98b849c2e6ae8/0_173_1000_600/master/1000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=498f0ed12d26224d484e12ffa08135f1',
    reviews: [
      { id: 'review_1', author: 'Sophia White', text: 'A great party game with plenty of room for social interaction and strategy.' },
      { id: 'review_2', author: 'Ryan Williams', text: 'The thrill of deception makes this game incredibly fun, but it can be hard with toxic players.' },
      { id: 'review_3', author: 'Michael Clark', text: 'Perfect for playing with friends, but playing with random people can be hit or miss.' },
      { id: 'review_4', author: 'Emma Harris', text: 'Very addictive, but the rounds can feel a bit long at times.' },
      { id: 'review_5', author: 'Lucas Martinez', text: 'A fun way to test friendships and have some laughs, but cheating is a problem.' }
    ]
  },
  {
    id: 5,
    name: 'Cyberpunk 2077',
    description:
      'A role-playing video game set in the dystopian Night City, where players assume the role of V, a mercenary with a customizable backstory and a quest to obtain an implant that could change the world. The game blends shooting mechanics, RPG elements, and a branching narrative.',
    publisher: 'CD Projekt Red',
    developer: 'CD Projekt Red',
    image: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/campaigns/cyberpunk-2077/revised/geforce-cp2077-phantom-liberty-og-2560x1440.jpg',
    reviews: [
      { id: 'review_1', author: 'David Evans', text: 'The world of Cyberpunk 2077 is immersive and rich with detail, but it has a lot of technical issues.' },
      { id: 'review_2', author: 'Charlotte King', text: 'The narrative is gripping, and the open-world gameplay is incredible, but the bugs can be frustrating.' },
      { id: 'review_3', author: 'George Scott', text: 'Despite the issues at launch, the game offers a deeply immersive experience with plenty of replay value.' },
      { id: 'review_4', author: 'Zoe Young', text: 'Amazing visuals and soundtrack, but the story pacing can feel uneven at times.' },
      { id: 'review_5', author: 'Henry Adams', text: 'Great game once the bugs were fixed, the lore and side missions are outstanding.' }
    ]
  }
];

function ReviewList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <strong>{review.author}:</strong> {review.text}
        </li>
      ))}
    </ul>
  );
}

export default function Games() {
  return (
    <div>
      <h1>Games List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/games/${game.id}`} state={{ game }}>
              <h3>{game.name}</h3>
            </Link>
            <img src={game.image} alt={game.name} style={{ width: '200px', height: 'auto', margin: '10px 0' }} />
            <p>{game.description}</p>
            <strong>Reviews:</strong>
            <ReviewList reviews={game.reviews} />
          </li>
        ))}
      </ul>
    </div>
  );
}
