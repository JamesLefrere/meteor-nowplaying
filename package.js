Package.describe({
  name: "jameslefrere:nowplaying",
  version: "0.1.0",
  summary: "Integration with iTunes/Spotify/etc via nowplaying npm",
  git: "https://github.com/JamesLefrere/meteor-nowplaying.git",
  documentation: "README.md"
});

Npm.depends({"nowplaying": "1.0.5"});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use("lepozepo:streams@0.2.0", ["client", "server"]);
  api.addFiles("lib/both/stream.js", ["client", "server"]);
  api.use("coffeescript", "server");
  api.addFiles("lib/server/nowplaying.coffee", "server");
  api.export("NowPlaying", ["client", "server"]);
});
