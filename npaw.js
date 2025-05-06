window.addEventListener('DOMContentLoaded', (event) => {
    let npawPlugin = new NpawPlugin('powerce');
    let player = videojs('my-video');
    npawPlugin.registerAdapter(player, 'npaw_adapter.json');
});