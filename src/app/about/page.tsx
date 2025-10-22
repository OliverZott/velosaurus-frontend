import { AboutComponent } from '@/components/AboutComponent';
import { Person } from '@/entitiy/Person';

export default function Page() {
    const personData: Person = {
        name: 'Olli',
        age: 40,
        profession: 'Software Developer',
        description: "Hello there =)"
    };

    return (
        <article className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <AboutComponent person={personData} />
                            <div className="mt-4">
                                <h4 className="h4 mb-3">My Journey</h4>
                                <p className="text-muted">
                                    I&apos;m passionate about building great software and solving complex problems.
                                    With experience in full-stack development, I love creating efficient and
                                    user-friendly applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}