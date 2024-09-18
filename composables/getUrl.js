import { joinURL } from "ufo"
export  const joinUrls = ( path) => {
    const base='https://pub-f9a129ce37b8446bafc8a9b4ca2c4bdb.r2.dev/'
    return joinURL(base, path)
}
  