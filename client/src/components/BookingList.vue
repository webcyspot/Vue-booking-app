<template lang="html">
  <div>
    <div class="search-container">
      <div class="search">
        <input type="text" placeholder="Search Bookings" v-model="searchBookings">
      </div>
      </div>
      <div class="list-container">
        <div class="list">
          <booking-list-item v-if="searchBookings" v-for="booking in filteredBookings" :booking="booking"></booking-list-item>
        </div>
      </div>
    </div>
</template>

<script>
import BookingListItem from '@/components/BookingListItem'
import BookingService from '@/services/BookingService'

export default {
  name: 'booking-list',
  props: ['bookings'],
  data () {
    return {
      searchBookings: ""
    }
  },
  computed: {
    filteredBookings(){
      return this.bookings.filter((booking) => {
        return booking.name.toLowerCase().includes(this.searchBookings.toLowerCase())
      });
    }
  },
  components: {
    'booking-list-item': BookingListItem
  }
}
</script>

<style lang="css" scoped>
.list-container {
  display: block;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 25px;
}

.list {
  width: 80%;
  display: inline-block;
}

.search-container {
  display: block;
  text-align: center;
  margin: 20px;
}

.search {
  width: 80%;
  display: inline-block;
}

input[type=text]{
  width: 375px;
  background-color: transparent;
  font-size: 18px;
  border-radius: 5%;
  border: solid 3px #ff206e;
}

input:focus {
  outline: none;
}

</style>
