<template lang="html">
  <div class="form-container">
    <form class="form" v-on:submit.prevent="addBooking" method="post">
      <div class="name">
        <label for="name">Name:</label>
        <input type="text" v-model="name" required/>
      </div>
      <div class="email">
        <label for="email">Email:</label>
        <input type="text" v-model="email" required/>
      </div>
      <div class="status">
        <input type="hidden" v-model="status" value="false" hidden/>
        <input class="save" type="image" :src="save" value="Save"/>
      </div>
    </form>
  </div>
</template>

<script>
import BookingService from '@/services/BookingService';
import {eventBus} from '@/main.js';
import save from '@/assets/save.png';

export default {
  name: 'booking-form',
  data() {
    return {
      name: '',
      email: '',
      status: '',
      save: save
    }
  },
  methods: {
    addBooking(event) {
      const newBooking = {
        name: this.name,
        email: this.email,
        status: this.status
      }
      BookingService.addBooking(newBooking)
      .then(booking => eventBus.$emit('booking-added', booking))
    },
  }
}
</script>

<style lang="css" scoped>
.form-container {
  border-style: solid;
  display: block;
  text-align: center;
}
.form {
  border-style: solid;
  display: inline-block;
  width: 25%;
  margin: 10px;
}
.name {
  margin: 10px;
}
.email {
  margin: 10px;
}
input[type=text]{
  width: 100%;
  background-color: transparent;
  font-size: 20px;
  border-radius: 5%;
}
input:focus {
  outline: none;
}
.save {
  height: 30px;
}
</style>
