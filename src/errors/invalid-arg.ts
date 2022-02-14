export class InvalidArguments extends Error {
  constructor (public name: string) {
    super(`error in the arg: ${name}`)
  }
}
