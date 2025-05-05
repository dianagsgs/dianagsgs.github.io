import videojs from 'video.js';

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("content loaded!");
    let npawPlugin = new NpawPlugin('powerce');
    let player = videojs('my-video');
    npawPlugin.registerAdapter(player, 'https://qa-smartplugin.youbora.com/catalog/v7/js/lib/last-build/samples/adapters-json/video/videojs/7.0.5-videojs-js.json');
  });
  console.log("hola!");