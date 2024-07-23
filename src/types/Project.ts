export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public peope: number,
    public status: ProjectStatus
  ) {}
}
