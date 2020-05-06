<template lang="html">
  <div class="booking" v-bind:class="checkedIn()">
    <p class="name">{{booking.name}}</p>
    <p>{{booking.email}}</p>
    <p>Check-In: {{booking.checkInDate}}</p>
    <p><span class="nights">Nights: {{booking.nights}}</span>
       <span class="guests">Guests: {{booking.guests}}</span></p>
    <button v-if="!booking.status"type="button" v-on:click="updateBooking">Check-In</button>
    <button type="button" v-on:click="deleteBooking">Delete</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import BookingService from '@/services/BookingService'

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
    }
  }
}
</script>

<style lang="css" scoped>
.booking{
  background-color: #ff206e;
  border: solid 3px #ff206e;
  color: white;
  font-family: 'Montserrat';
  width: 265px;
  float: left;
  margin: 5.5px;
}
.checkedIn{
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
  background-color: white;
  color: black;
  border: solid 3px #ff206e;
}
.name {
  font-weight: 900;
}
p {
  margin: 5px;
}
.nights, .guests {
  margin-right: 10px;
  margin-left: 10px;
}
button {
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
}
</style>
