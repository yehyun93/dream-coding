

class UserStorageWithPromise {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        resolve(id);
      } else {
        reject(new Error('not found'));
      }
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      if(user == 'ellie'){
        resolve({name: 'ellie', role: 'admin'});
      } else {
        reject(new Error('no access'));
      }
    })
  }
}

const userStorage = new UserStorageWithPromise();
const id = prompt('enter your id');
const password = prompt('enter your pwd');

userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Heelo ${user.name}, you have a ${user.role} role`))
.catch(console.log);