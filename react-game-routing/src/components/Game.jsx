import { useLocation } from 'react-router-dom';

export default function Game() {
    const { state } = useLocation(); 
    const game = state.game;

    return (
        <div>
            <h1>{game.name}</h1>
            <p><center><strong>Description:</strong> {game.description}</center></p>
            <p><center><strong>Publisher:</strong> {game.publisher}</center></p>
            <p><center><strong>Developer:</strong> {game.developer}</center></p>
        </div>
    );
}