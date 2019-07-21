import axios from 'axios';


export const login = () => {
    sessionStorage.setItem('token', 'TstLogin');
}

export const logout = () => {
    sessionStorage.removeItem('token');
}

export const islogin = () => {
    if (sessionStorage.getItem('token')) {
        return true;
    }

    return false;
}

export const  isLogin2 = async () => {
    let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': sessionStorage.getItem('token')
        }
      };
      
    axios.get('http://localhost:5000/api/users/verify', config)
          .then(function (response) {
            //let decodeddata = decode(response.data.token);
            if(response.status === 200){
                console.log('true');
                return true
                
            }
          })
          .catch(function (error) {
            console.log("false");
            return false;
          });
}