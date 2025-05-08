window.addEventListener('DOMContentLoaded', (event) => {
    let npawPlugin = new NpawPlugin('powerce');
    let player = videojs('my-video');
    

    const radios = document.querySelectorAll('input[name="bitrate"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            console.log("Selected bitrate unit:", event.target.value);
            if(event.target.value === "bps"){
                npawPlugin.removeAdapter("my-video");
                npawPlugin.registerAdapter(player, 'http://qa-smartplugin.youbora.com/catalog/v7/js/lib/last-build/samples/adapters-json/video/videojs/7.0.5-videojs-js.json');
            } else { // event.target.value === "Mbps"
                npawPlugin.removeAdapter("my-video");
                npawPlugin.registerAdapter(player, 'npaw_adapter.json');
            }
        }
        });
    });
});