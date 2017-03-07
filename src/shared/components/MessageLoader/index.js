
const getMessages = (store, longitude, latitude) => {
    const token = store.getState().global.token;
    if (longitude !== null && latitude !== null && token !== null) {
        console.log('Requesting messages..');
        axios({
            method: 'get',
            url: 'http://catkinson-001-site1.htempurl.com/api/Message?token=' + token + '&longitude=' + longitude + '&latitude=' + latitude,
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(function (data) {
            var response = JSON.parse(data.request._response);
            console.log(response);
            for (var i = 0; i < response.length; i++) {
            response[i].PostedDate = formatDate(response[i].PostedDate);
            response[i].ExpirationDate = formatDate(response[i].ExpirationDate);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }

  const formatDate = (date) => {
    console.log(date);
    var parsedDate = date.toString().split('T')[0].split('-');
    var parsedTime = date.toString().split('T')[1].split(':');
    if (parsedTime[0] > 12) {
      parsedTime[0] -= 12;
    }
    return parsedTime[0] + ':' + parsedTime[1] + ' ' + parsedDate[1] + '/' + parsedDate[2] + '/' + parsedDate[0];
  }

  export default getMessages;