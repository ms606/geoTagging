const button = document.getElementById('submit');
console.log(button);

  
button.addEventListener('click', async event => {
const mood = document.getElementById('mood').value;
            
            if('geolocation' in navigator){
              navigator.geolocation.getCurrentPosition(async position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            document.getElementById("latitude").textContent = position.coords.latitude;
            document.getElementById("longitude").textContent = position.coords.longitude;
            
            const data = {lat, lon, mood};

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const jj = await response.json();
            console.log(jj);
            });
        }
        else {
           console.log('geolocation not available') 
        }

        });
     

    