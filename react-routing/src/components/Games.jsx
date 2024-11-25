import { Link } from "react-router-dom"

const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'This is the one'},
    {id: 2, name: 'Valorant', description: 'num one fps game'},
    {id: 3, name: '2XKO', description: 'tag team'},
    {id: 3, name: 'League of Legends', description: 'moba game'}
    
]


export default function Games() {
    return(
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to = {'/games/${game.id}'} state = {{game}}> {game.name.toLocaleUpperCase()} </Link> - 
                        {game.description} 
                    </li>
                ))}
                
            </ul>
        </>
    )
}