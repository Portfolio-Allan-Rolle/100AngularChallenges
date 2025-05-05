export interface IAccordionItem {
  title: string;
  content: string;
  isExpanded: boolean;
}

export enum sortType {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
