export const request = state => {
  console.tron.log('REQUESTING')
  return state.merge({ loading: true })
}

export const failure = (state, { error }) =>
  state.merge({ loading: false, error })

export const success = (state, { data }) =>
  state.merge({ loading: false, data })

export const successWithKey = key => (state, { data }) =>
  state.merge({ loading: false, [key]: data })

export const successWithTansform = (key, transformer) => (state, { data }) =>
  state.merge({ loading: false, [key]: transformer(data) })
