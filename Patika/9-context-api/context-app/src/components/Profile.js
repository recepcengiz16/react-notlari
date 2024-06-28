import {useUser} from '../context/UserContext';

function Profile() {

    const {user,setUser} = useUser();

    const handleLogin = ()=>{
        setTimeout(() => {
            setUser({id:1,username:"mellon",bio:"lorem ipsum doler"})
        }, 1500);
    }

  return (
    <div>
      <button onClick={handleLogin}>Giriş Yap</button>
      <pre>
        { JSON.stringify(user)}
      </pre>
    </div>
  )
}

export default Profile
