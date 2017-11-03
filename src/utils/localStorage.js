export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('entriaTodo')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('entriaTodo', serializedState)
  } catch (err) {
    console.log(err)
  }
}
