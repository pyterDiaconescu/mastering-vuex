import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr'},
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [],
    totalEvents: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, totalEvents) {
      state.totalEvents = totalEvents
    }
  },
  actions: {
    createEvent({commit}, event){
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({commit}, { perPage, page }){
      EventService.getEvents(perPage, page)
        .then(response => {
          const totalEvents = response.headers['x-total-count']
          commit('SET_EVENTS_TOTAL', totalEvents)

          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response)
        })
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
