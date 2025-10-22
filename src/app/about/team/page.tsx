import { Person } from '@/entitiy/Person';
import { AboutComponent } from '@/components/AboutComponent';

const teamMembers: Person[] = [
    {
        name: 'Olli',
        age: 40,
        profession: 'Lead Developer',
        description: 'Experience: 20 years in software development. Specializes in system architecture and team leadership.'
    },
    {
        name: 'Alice',
        age: 32,
        profession: 'UX Designer',
        description: 'Experience: 8 years in UX/UI design. Passionate about creating intuitive user experiences.'
    },
    {
        name: 'Bob',
        age: 28,
        profession: 'Frontend Developer',
        description: 'Experience: 5 years in frontend development. Expert in React and modern web technologies.'
    }
];

export default function Page() {
    return (
        <article className="container">

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {teamMembers.map((member) => (
                    <div key={member.name} className="col">
                        <AboutComponent person={member} />
                    </div>
                ))}
            </div>

            <div className="card mt-5">
                <div className="card-body bg-light">
                    <h4 className="card-title">Join Our Team</h4>
                    <p className="card-text">
                        We are always looking for talented individuals to join our team.
                        If you are passionate about creating amazing software, we would love to hear from you!
                    </p>
                </div>

            </div>
        </article>
    );
}