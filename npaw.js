window.addEventListener('DOMContentLoaded', (event) => {
    let npawPlugin = new NpawPlugin('powerce');
    let player = videojs('my-video');
    npawPlugin.registerAdapter(player, 'npaw_adapter.json');

    const radios = document.querySelectorAll('input[name="bitrate"]');

    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log("Selected bitrate unit:", event.target.value);
        }
        });
    });
});