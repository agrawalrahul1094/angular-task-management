import { Component, OnInit, Input } from '@angular/core';
import { IChip } from './chip.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() config: IChip;

  constructor() { }

  ngOnInit() { }

}
