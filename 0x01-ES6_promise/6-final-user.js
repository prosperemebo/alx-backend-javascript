import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => {
        const result = [];
        for (const data of response) {
          if (data.status === 'fulfilled')
            result.push({ status: data.status, value: data.value });
          else result.push({ status: data.status, value: `${data.reason}` });
        }
        return result;
    });
}
