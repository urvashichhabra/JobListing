export interface IJob {
  type: string;
  title: string;
  description: string;
  salary: string;
  location: string;
  id?: string;
  company: IJobCompany;
}

export interface IJobCompany {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}
