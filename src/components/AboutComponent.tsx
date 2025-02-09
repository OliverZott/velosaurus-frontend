import { Person } from "@/entitiy/Person";
import React from 'react';


// Accessing Props Directly
export function AboutComponent(prop: { person: Person }) {

    const { name, age, profession } = prop.person;

    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li>Age: {age}</li>
                <li>Profession: {profession}</li>

            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, voluptate, quibusdam, quia voluptas quod quos
                voluptatibus quae voluptatem doloribus quidem? Quisquam
                voluptatum, voluptate, quibusdam, quia voluptas quod quos
                voluptatibus quae voluptatem doloribus quidem?
            </p>
        </div>
    )
}


// 2nd variant: Destructuring in Function Arguments
// interface AboutComponentProps {
//     person: Person;
// }

// export function AboutComponent({ person }: AboutComponentProps) {
//     const { name, age, profession } = person;
// }
