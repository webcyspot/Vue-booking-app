<template lang="html">
  <div class="booking" v-bind:class="checkedIn()">
    <p class="name">{{booking.name}}</p>
    <p>{{booking.email}}</p>
    <p class="checkIn">Arrival: <span class="arrival">{{dateParse()}}</span></p>
    <p><span class="nights">Nights: <span class="data">{{booking.nights}}</span></span>
       <span class="guests">Guests: <span class="data">{{booking.guests}}</span></span></p>
    <button v-if="!booking.status"type="button" v-on:click="updateBooking">Check-In</button>
    <button type="button" v-on:click="deleteBooking">Delete</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';
import BookingService from '@/services/BookingService';
import moment from 'moment';

export default {
  name: 'booking-list-item',
  props: ['booking'],
  methods: {
    updateBooking() {
      const updateBooking = {status: true}
      BookingService.updateBooking(this.booking._id, updateBooking)
      .then((booking) => eventBus.$emit('booking-updated', booking))
    },
    deleteBooking() {
      BookingService.deleteBooking(this.booking._id)
      .then(() => eventBus.$emit('booking-deleted', this.booking._id))
    },
    checkedIn() {
      return this.booking.status ? "checkedIn" : "booking";
    },
    dateParse() {
      return moment(this.datee).format('DD-MM-YYYY')
    }
  }
}
</script>

<style lang="css" scoped>
.booking {
  background-color: white;
  border: solid 3px #ff206e;
  font-family: 'Montserrat';
  width: 265px;
  float: left;
  margin: 5.5px;
}

.checkedIn {
  background-color: #ff206e;
  border: solid 3px #ff206e;
  color: white;
  font-family: 'Montserrat';
  width: 265px;
  float: left;
  margin: 5.5px;
  opacity: 50%;
}

.booking:hover {
  background-color: #ff206e;
  border: solid 3px #ff206e;
  color: white;
}

.name {
  font-weight: 900;
}

p {
  margin: 5px;
}

.nights, .guests, .checkIn {
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 900;
}

button {
  width: 45%;
  margin-top: 4px;
  margin-bottom: 2px;
  margin-left: 2px;
  margin-right: 2px;
  border: solid 1px white;
  background-color: #ff206e;
  color: white;
}

button:hover {
  border: solid 1px white;
  background-color: white;
  color: #ff206e;
}
.data {
  font-weight: 400;
}
.arrival {
  font-weight: 400;
  margin-left: 5px;
}
</style>
