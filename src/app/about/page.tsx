import { AboutComponent } from '@/components/AboutComponent';
import { Person } from '@/entitiy/Person';
import React from 'react';


// default export used in this example
const AboutPage = () => {


    const personData: Person = {
        name: 'Olli',
        age: 40,
        profession: 'Software Developer',
    };

    return (
        <div>
            <AboutComponent person={personData} />
        </div>
    )
}

export default AboutPage;