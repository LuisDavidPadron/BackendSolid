// eslint-disable-next-line node/no-deprecated-api
import { UrlWithParsedQuery, parse } from 'url'
import { InvalidArguments } from '../errors/invalid-arg'

export class UrlLogin {
  public static parseUrl (url: string): UrlWithParsedQuery {
    if (!url) throw new InvalidArguments(url)
    return parse(url, true)
  }
}
