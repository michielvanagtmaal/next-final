import { showMembers } from "@/members-data";
import MemberItem from "./member-item";

function MemberList(props) {

    const items = showMembers();

  return (
    <ul>
      {items.map((member) => (
        <MemberItem
          key={member.id}
          id={member.id}
          name={member.name}
          age={member.age}
          job={member.job}
          bio={member.bio}
          avatar={member.avatar}
        />
      ))}
    </ul>
  );
}

export default MemberList;
