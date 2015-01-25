Package.describe({
  name: "jameslefrere:hitbox-chat",
  version: "0.1.0",
  summary: "A simple hitbox chat connection for Meteor",
  git: "https://github.com/JamesLefrere/meteor-hitbox-chat.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0");
  api.use([
    "coffeescript"
  ], "server");
  api.addFiles([
    "lib/server/hitbox-chat-server.coffee",
  ], "server");
});
