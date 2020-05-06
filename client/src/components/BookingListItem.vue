<template lang="html">
  <div class="booking">
    <p>{{booking.name}}</p>
    <p>{{booking.email}}</p>
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
    }
  }
}
</script>

<style lang="css" scoped>
.booking{
  border-style: solid;
  width: 200px;
  float: left;
  margin: 5px;
  background-color: #fff;
}
</style>
