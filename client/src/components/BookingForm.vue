<template lang="html">
  <div class="form-container">
    <form class="form" v-on:submit.prevent="addBooking" method="post">
      <div class="row">
        <div class="col-25">
          <label for="name">Name</label>
        </div>
        <div class="col-75">
          <input type="text" v-model="name" required/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="email">Email</label>
        </div>
        <div class="col-75">
          <input type="text" v-model="email" required/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="checkInDate">Check-In</label>
        </div>
        <div class="col-75">
          <input type="date" v-model="checkInDate" required/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="nights">Nights</label>
        </div>
        <div class="col-75">
          <input type="number" v-model.number="nights" required/>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="guests">Guests</label>
        </div>
        <div class="col-75">
          <input type="number" v-model.number="guests" required/>
        </div>
      </div>
      <input type="hidden" v-model="status" value="false" hidden/>
      <input class="save" type="image" :src="save" value="Save"/>
    </form>
    <hr>
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
      checkInDate: '',
      nights: '',
      guests: '',
      status: '',
      save: save
    }
  },
  methods: {
    addBooking(event) {
      const newBooking = {
        name: this.name,
        email: this.email,
        checkInDate: this.checkInDate,
        nights: this.nights,
        guests: this.guests,
        status: this.status
      }
      BookingService.addBooking(newBooking)
      .then(booking => eventBus.$emit('booking-added', booking));
      this.name = '';
      this.email = '';
      this.checkInDate = '';
      this.nights = '';
      this.guests = '';
    },
  }
}
</script>

<style lang="css" scoped>
.form-container {
  display: block;
  text-align:center;
  margin: 30px;
}

.form {
  display: inline-block;
  border: solid 3px #ff206e;
  border-radius: 5px;
  width: 375px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
  padding-bottom: 6px;
  padding-top: 10px;
  font-size: 18px;
  color: #ff206e;
  font-family: 'Montserrat';
}

.col-75 {
  float: left;
  width: 70%;
  margin-top: 6px;
  padding-top: 6px;
  padding-bottom: 5px;
  clear: none;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

input[type=text],[type=number],[type=date]{
  width: 90%;
  background-color: transparent;
  font-size: 18px;
  border-radius: 5%;
  border: solid 3px #ff206e;
}

input:focus {
  outline: none;
}

.save {
  height: 40px;
  float: right;
  margin: 10px;
}

hr {
  margin-top: 30px;
  background-color: #ff206e;
  border: none;
  height: 3px;
}
</style>
