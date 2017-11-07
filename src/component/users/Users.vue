<template>
  <tbody id="users">
    <tr v-for="user in userList" v-bind="userList">
      <td>&nbsp;</td>
      <td>{{ user.id }}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </tbody>
</template>


<script src="./users.js">
