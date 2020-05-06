<template lang="html">
  <div>
    <div class="list-container">
      <div class="list">
    <booking-list-item v-for="booking in bookings" :booking="booking"></booking-list-item>
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
  components: {
    'booking-list-item': BookingListItem
  }
}
</script>

<style lang="css" scoped>
.list-container {
  display: block;
  text-align: center;
}
.list {
  width: 80%;
  display: inline-block;
}
</style>
