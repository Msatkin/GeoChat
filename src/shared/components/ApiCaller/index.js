import axios from 'axios';

export const login = (username, hash, handleResponse) => {
    console.log("CALLING")
    axios({
      method: 'post',
      url: 'http://catkinson-001-site1.htempurl.com/api/Login?username='+ username +'&password=' + hash,
      dataType: "json"
    })
    .then(function (data) {
      var response = JSON.parse(data.request._response);
      console.log('Success: ' + response.Success);
      handleResponse(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const register = (email, username, hash, handleResponse) => {
    console.log("CALLING")
    axios({
      method: 'post',
      url: 'http://catkinson-001-site1.htempurl.com/api/Register?username='+ username +'&password=' + hash + '&email=' + email
    })
    .then(function (data) {
      var response = JSON.parse(data.request._response);
      console.log('Success: ' + response.Success);
      handleResponse(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}