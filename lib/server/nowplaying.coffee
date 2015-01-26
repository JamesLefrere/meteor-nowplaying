nowPlaying = Npm.require "nowplaying"

nowPlaying.on "playing", (data) ->
  console.log data
  NowPlaying.emit "playing", data
  return

nowPlaying.on "paused", (data) ->
  NowPlaying.emit "paused", data
  return
