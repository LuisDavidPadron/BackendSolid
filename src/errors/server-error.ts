export class ServerError extends Error {
  constructor (stack: string) { super(`Error: ${stack}`) }
}
