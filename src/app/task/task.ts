import { IChip } from '../chip/chip.model';

export class Task {

  constructor(
    public id: number,
    public title: string,
    public description: string,
    public createdBy: string,
    public img?: string,
    public linkedUsers?: [],
    public chips?: IChip[]
  ) { }

}
