export class MissingFormalParameter extends Error {
  constructor (public name: string) {
    super(`error in the param: ${name}`)
  }
}
