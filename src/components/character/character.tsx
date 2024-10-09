import React, {FC} from 'react';
import './character.css'
type IPropType = {
    name: string;
    status: string;
    species: string;
    gender: string;
    img: string;
    children?: React.ReactNode;
}
const Character: FC<IPropType> = (props) => {
    let {children, name, status, species, gender, img} = props;
    return (
        <div>
            <h2 className={'title'}>{name}</h2>
            <ul>
                <li>Status: {status}</li>
                <li>Species: {species}</li>
                <li>Gender: {gender}</li>
            </ul>
            <img src={img} alt={name}/>
            {
                children
            }
        </div>
    );
};

export default Character;