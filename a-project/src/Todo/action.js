import {SET_JOB, ADD_JOB, REMOVE_JOB} from './constants'

export const setJob = payload => ({ type: SET_JOB, payload })
export const addJob = payload => ({ type: ADD_JOB, payload })
export const removeJob = payload => ({ type: REMOVE_JOB, payload })