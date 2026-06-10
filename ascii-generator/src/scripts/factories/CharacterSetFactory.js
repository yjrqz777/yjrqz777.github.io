<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>export default class CharacterSetFactory {
    static getCharacterSet(start, end) {
        var characterSet = [];

        for(var i = start; i <= end; i++) {
            characterSet.push(String.fromCodePoint(i));
        }

        return characterSet;
    }
}
