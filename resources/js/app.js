require('./bootstrap');
console.log('work');

Echo.channel('free-channel')
    .listen('.my-event', (e) => {
        console.log(e);
    });
