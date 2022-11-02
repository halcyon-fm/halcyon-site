function isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export { isMobileDevice, randInt }
