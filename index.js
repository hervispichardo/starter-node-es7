import getSleep from './app'

getSleep()
  .then(res => {
    console.log("final response: ", res);
  })
  .catch(error => console.log("error: ", error));

const array = [
  'asd',
  'asd2'
];

