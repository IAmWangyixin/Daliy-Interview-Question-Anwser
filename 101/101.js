function print(n) {
    setTimeout(() => {
        console.log(n);
    }, Math.floor(Math.random() * 1000));
}

function print(n) {
    setTimeout(() => {
        console.log(n);
    }, 1, Math.floor(Math.random() * 1000));
}
for (var i = 0; i < 10; i++) {
    print(i);
}