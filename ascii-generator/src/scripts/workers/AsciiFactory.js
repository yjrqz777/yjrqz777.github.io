<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>import AsciiFactory from '../factories/AsciiFactory';

let worker = self;

worker.onmessage = function(data) {
    worker.postMessage(AsciiFactory.getAscii(data.data.characterLightnessSet, data.data.imageLightnessData));
};
