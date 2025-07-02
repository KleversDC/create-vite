import UserCard from "../userCard";

function UserList({users})
{
    return(<>

    <h3>List of Users</h3>
    {users.map(u=><UserCard {...u}/>)}

   </> )
}
export default UserList;