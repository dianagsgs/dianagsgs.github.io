window.addEventListener('DOMContentLoaded', (event) => {
    const bits_json = 'npaw_og_adapter.json';
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

    document.getElementById('views').innerHTML = 0;
    window.setInterval(function(){
      fetch('http://127.0.0.1:5000/get_views', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => console.log(data));
      document.getElementById('views').innerHTML = 1;
    }, 10000);
});