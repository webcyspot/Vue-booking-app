const baseUrl = 'http://localhost:3000/api/bookings/';

export default {
  getBooking() {
    return fetch(baseUrl)
    .then(res => res.json())
  },
  deleteBooking(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
  },
  addBooking(payload){
    return fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json());
  },
  updateBooking(id, payload){
    return fetch(baseUrl + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteAll(){
    return fetch(baseUrl, {
      method: 'DELETE'
    })
  }
}
