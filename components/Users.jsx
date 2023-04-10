// import Image from 'next/image'
"use client";
import { useRouter } from 'next/navigation';

const Users = ({ users }) => {

    const router = useRouter();

    return (
        <div>
            <ul className='list-group'>
                {
                    users.map((user) => (
                        <li key={user.id}
                            className='list-group-item d-flex justify-content-between align-items-center list-group-item-action'
                            onClick={() => {
                                // console.log(user.id)
                                router.push(`/users/${user.id}`)
                            }}
                        >
                            <div>
                                <h5>{user.id} {user.first_name} {user.last_name}</h5>
                                <p>{user.email}</p>
                            </div>

                            {/* <Image
                                src={user.avatar}
                                alt={user.email}
                                width={800}
                                height={500}
                            /> */}
                            <img
                                src={user.avatar}
                                alt={user.email}
                                style={{ borderRadius: "50%" }}
                            />

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users