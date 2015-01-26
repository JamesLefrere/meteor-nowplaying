# nowplaying

Something of a work-in-progress. Mac only. 

# Description

This package uses [nowplaying](https://github.com/dkordik/nowplaying) and [lepozepo:streams](https://atmospherejs.com/lepozepo/streams) to stream the currently playing track information from iTunes/Spotify/etc. 

This requires a number of gems: 

    gem install eventmachine eventmachine-distributed-notification activesupport json

I have sent in a PR for eventmachine-distributed-notification to allow for builds on new versions of XCode; the current version will not build on Xcode 4.6+.

# Usage

On the client, the NowPlaying object is a stream with "playing" and "paused" events. One way to make use of this in your templates is to use a simple ReactiveVar:

    nowPlayingVar = new ReactiveVar

    NowPlaying.on "playing", (data) ->
      nowPlayingVar.set data

    NowPlaying.on "pause", (data) ->
      nowPlayingVar.set data

    Template.nowPlaying.helpers
      nowPlaying: ->
        console.log nowPlayingVar.get()
        nowPlayingVar.get()

Have fun!