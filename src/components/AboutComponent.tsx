import { Person } from "@/entitiy/Person";

interface AboutComponentProps {
    person: Person;
}

export function AboutComponent({ person }: AboutComponentProps) {
    const { name, age, profession, description } = person;

    return (
        <div className="card h-100">
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{profession}</h6>
                <p className="card-text">
                    <small className="text-muted">Age: {age}</small>
                </p>
                {description && (
                    <p className="card-text mt-3">{description}</p>
                )}
            </div>
        </div>
    );
}


// 2nd variant: Destructuring in Function Arguments
// interface AboutComponentProps {
//     person: Person;
// }

// export function AboutComponent({ person }: AboutComponentProps) {
//     const { name, age, profession } = person;
// }
