import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  imports: [],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.scss'
})
export class SideNavigationComponent {

  @Input() isOpen: boolean = true; // Recebe do componente pai
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  onCollapseClick(): void {
    this.toggle.emit(); // Dispara evento para o pai
  }

}
