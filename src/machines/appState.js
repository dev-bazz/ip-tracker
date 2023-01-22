const { createMachine } = require("xstate");

const appState = 
/** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgEkAFAfQBUAnAQwGMBrMC-EABy1gEsAXDrDZgB6IAjACZ0ATxHCAdAE4FcgBwAGAOwBWAMxLhauQDYNyNCGLlq9RjIA2WKhA4YozNpx59BiAysmJlMgAsiqqaOnpyaiYmQA */
  createMachine({
    schema: {
      services: {
    }
  },
  id: "IP_Tracker",
  context: {},

  states: {
    loading: {}
  },

  initial: "loading"
  })

  export {appState}