getData();

 async function getData(){
 const response = await fetch('/api');
 const data     = await response.json();
 console.log(data);

 for (item of data){
    const root = document.createElement('div');
    const geo  = document.createElement('div');
    geo.innerHTML = `<p> Geo Location is </p> ${item.lat} , ${item.lon}`;

    const timestamp      = document.createElement('div');
    timestamp.textContent= `${item.timestamp}`;

    root.append(geo,timestamp);
    document.body.append(root);
}
}

