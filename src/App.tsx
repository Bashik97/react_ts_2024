import React, {FC} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {IUser} from "./models/IUser";

const App: FC = () => {
const lift = (user: IUser) => {
    console.log(user);
}
    return (
        <div>
            <Users lift={lift}/>
        </div>
    );
}

export default App;
