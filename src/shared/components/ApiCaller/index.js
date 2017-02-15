import axios from 'axios';
import { setLoginApiResponse, setLoginErrors } from '@store/modules/login';

export const login = (username, hash, handleResponse) => {
    console.log("CALLING")
    axios({
      method: 'post',
      url: 'http://catkinson-001-site1.htempurl.com/api/Login?username='+ username +'&password=' + hash,
      dataType: "json"
    })
    .then(function (data) {
      var response = JSON.parse(data.request._response);
      console.log(response);
      handleResponse(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}