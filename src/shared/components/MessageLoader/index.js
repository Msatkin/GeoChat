import { Store } from '@store/create';
import { getMessages } from '@components/ApiCaller';

const loadMessages = () => {
    const token = Store.getState().global.token;
    const longitude = Store.getState().global.location.longitude;
    const latitude = Store.getState().global.location.latitude;

    if (longitude !== null && latitude !== null && token !== null) {
        console.log('Requesting messages..');
        getMessages(token, longitude, latitude, handleResponse)
    }
}

const handleResponse = (response) => {
    for (var i = 0; i < response.length; i++) {
        response[i].PostedDate = formatDate(response[i].PostedDate);
        response[i].ExpirationDate = formatDate(response[i].ExpirationDate);
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

export default loadMessages;