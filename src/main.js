import Vue from 'vue'
import router from './router'

import Users from './component/users/Users.vue';

import './index.css';
import './index.scss';

//import {getUsers, deleteUser} from './api/userApi';


var app = new Vue({
  el: '#app',
  router,
  data: {
    msg: 'My Users'
  },
  components: {
    Users
  },
  methods: {
    getUsers: () => {
      app.$refs.userHandler.getUsers();
    }
  }
})

/*
// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete This User</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});

*/
