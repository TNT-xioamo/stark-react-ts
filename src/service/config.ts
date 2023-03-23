const devBaseURL: string = 'http://39.102.36.212:3000'
const proBaseURL: string = 'http://39.102.36.212:3000'
const testBaseURL: string = 'http://39.102.36.212:3000'

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL :  process.env.NODE_ENV === 'test' ? testBaseURL : proBaseURL

export const TIMEOUT = 8000