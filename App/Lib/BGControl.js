const updateFunctions = {}

let updateBGHeight

export const setUpdateBGHeight = func => (updateBGHeight = func)
export const getUpdateBGHeight = _ => updateBGHeight

export const setUpdateFunc = (key, func) => (updateFunctions[key] = func)
export const getUpdateFunc = key => updateFunctions[key]
