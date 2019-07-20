import axios from 'axios';
export default function checkAuth(){
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
            console.log('false');
            return false;
          })
          .catch(function (error) {
            console.log(error);
          });
}