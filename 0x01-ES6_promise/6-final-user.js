import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const result = [];
    for (const result of results) {
      if (result.status === 'fulfilled')
        result.push({ status: result.status, value: result.value });
      else result.push({ status: result.status, value: `${result.reason}` });
    }
    return result;
  });
}
