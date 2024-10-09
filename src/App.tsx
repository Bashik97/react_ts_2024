import React from 'react';
import './App.css';
import Character from "./components/character/character";
import Users from "./components/users/Users";

function App() {
    return (
        <div>
            <Character
                name={'Amazing Johnathan'}
                status={'Alive'}
                gender={'Male'}
                species={'Human'}
                img={'https://rickandmortyapi.com/api/character/avatar/734.jpeg'}
            />

            <Character
                name={'Eric McMan'}
                status={'Alive'}
                species={'Human'}
                gender={'Male'}
                img={'https://rickandmortyapi.com/api/character/avatar/200.jpeg'}
            />
            <hr/>
            <Users/>
        </div>
    );
}

export default App;
