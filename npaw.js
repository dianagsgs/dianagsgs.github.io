window.addEventListener('DOMContentLoaded', (event) => {
    const bits_json = 'http://qa-smartplugin.youbora.com/catalog/v7/js/lib/last-build/samples/adapters-json/video/videojs/7.0.5-videojs-js.json';
    const mbps_json = 'npaw_adapter.json';
    let npawPlugin = new NpawPlugin('powerce');
    let player = videojs('my-video');
    npawPlugin.registerAdapter(player, bits_json);

    const radios = document.querySelectorAll('input[name="bitrate"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log("Selected bitrate unit:", event.target.value);
            if(event.target.value === "bps"){
                npawPlugin.removeAdapter("my-video");
                npawPlugin.registerAdapter(player, bits_json);
            } else { // event.target.value === "Mbps"
                npawPlugin.removeAdapter("my-video");
                npawPlugin.registerAdapter(player, mbps_json);
            }
        }
        });
    });
});