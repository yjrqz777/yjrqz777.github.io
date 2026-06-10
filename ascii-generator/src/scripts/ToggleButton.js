<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>export default class ToggleButton {
    constructor(button, target) {
        this.button = button;
        this.target = target;
        this.activate();
    }

    activate() {
        this.button.addEventListener('click', () => {
            if (!this.target.style.display) {
                this.target.style.display = 'block';
            } else {
                this.target.style.display = null;
            }
        })
    }
}

window.ToggleButton = ToggleButton;
