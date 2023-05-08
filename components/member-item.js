import Button from './ui/button';

function MemberItem(props) {
    const { id, name, age, job, bio, avatar } = props;
    return (
            <li>
                <div>
                    <img src={avatar} width="60px" alt={name} />
                    <h3>{name}, {age}</h3>
                    <h5>{job}</h5>
                    <p>{bio}</p>
                </div>
                <Button/>
            </li>
    )
}

export default MemberItem;