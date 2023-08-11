import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  randomIcon!: IconDefinition;
  selectedIndex!: number;

  faIcons = [...Object.keys(fas)];

  eventsCount = 0;
  isWorking = false;

  getRandomIcon() {
    this.eventsCount++;
    if (!this.isWorking) {
      this.processQueue();
    }
  }

  processQueue() {
    if (this.eventsCount === 0) {
      this.isWorking = false;
      return;
    }

    this.isWorking = true;
    setTimeout(() => {
      this.eventsCount--;

      let randomIndex;
      do {
        randomIndex = this.randomIndex();
      } while (this.selectedIndex === randomIndex);

      this.randomIcon = fas[this.faIcons[randomIndex]];
      this.selectedIndex = randomIndex;

      this.processQueue();
    }, 3000);
  }

  randomIndex() {
    return Math.floor(Math.random() * this.faIcons.length);
  }
}
