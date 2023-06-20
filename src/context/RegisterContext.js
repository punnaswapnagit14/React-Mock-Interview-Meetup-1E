import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Art and Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})
export default RegisterContext
