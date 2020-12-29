import React from 'react'

export default React.createContext({
  mashes: [],
  binds: [],
  addMash: () => {},
  addBind: () => [{}],
  deleteMash: () => {},
  deleteBind: () => [{}],
  updateMash: () => {},
  updateBind: () => [{}]
})
