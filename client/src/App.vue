<template lang="html">
  <div>
    <div class="menu-bar">
      <div class="logo-container">
        <img class="logo" src="./assets/logo.png" alt="">
      </div>
      <div class="title-container">
        <p class="title">Hotel Bookings</p>
      </div>
    </div>
    <booking-form></booking-form>
    <booking-list :bookings="bookings"></booking-list>
  </div>
</template>

<script>
import BookingForm from '@/components/BookingForm';
import BookingList from '@/components/BookingList';
import BookingService from '@/services/BookingService';
import {eventBus} from '@/main.js';

export default {
  name: 'App',
  data(){
    return{
      bookings: []
    }
  },
  components: {
    "booking-form": BookingForm,
    "booking-list": BookingList,
  },
  mounted() {
    this.getBooking();

    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking);
    });

    eventBus.$on('booking-updated', (updatedBooking) => {
      let index = this.bookings.findIndex(booking => booking._id === updatedBooking._id);
      this.bookings.splice(index, 1, updatedBooking);
    });

    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })

  },
  methods: {
    getBooking(){
      BookingService.getBooking()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
.menu-bar {
  overflow: auto;
  display: block;
  text-align: center;
  background-color: #ff206e;
  font-family: 'Pacifico', cursive;
  color: white;
  width: 100%;
}

.logo-container {
  width: 7%;
  float: left;
}

.logo {
  height: 50px;
  margin-top: 18px;
  margin-bottom: 7px;
}

.title-container {
  width: 85%;
  float: left;
  margin-bottom: 7px;

}

.title {
  font-size: 50px;
}

</style>

<style>
body {
  user-select: none;
  overflow-x: hidden;
}

p {
  padding: 0;
  margin: 0;
}

#page-container {
  position: relative;
  min-height: 100vh;
}

#content-wrap {
  padding-bottom: 2.5rem;
}

#footer {
  position: absolute;
  width: 97.5%;
  bottom: 0;
  height: 3rem;
  display: block;
  background-color: #ff206e;
  padding: 7px 18px;
}

</style>
