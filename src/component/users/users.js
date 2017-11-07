import {getUsers} from '../../api/userApi';

var userList = [
  {
    firstName: 'John',
    lastName: "Doe",
    id: 1,
    email: 'jdoe@web.com'
  },
    {
    firstName: 'Jane',
    lastName: "Doe",
    id: 2,
    email: 'jdoe@web.com'
  }
]

export default {
  data: function() {
    return {
      userList:userList
    }
  },
  methods: {
    getUsers: () => {
      getUsers().then(response => {
        var users = response.data
        console.log("Users received:") // eslint-disable-line no-console
        console.log(users) // eslint-disable-line no-console
        userList.splice(0, userList.length)
        users.forEach( user => {
          userList.push(user)
        })
        console.log(userList) // eslint-disable-line no-console
      })
    }
  }
}
