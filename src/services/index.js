// import axios from 'axios';

export const login = data => {
  return new Promise((resolve, reject) => {
    if (data.username === 'test' && data.password === '12345') {
      resolve({userid: 1, token: '245454', name: 'test user'});
    } else {
      reject(new Error('Credentials not matching'));
    }
  });
};
