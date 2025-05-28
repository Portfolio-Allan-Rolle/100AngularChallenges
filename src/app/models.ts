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

export enum ribbonPosition {
  TOP_LEFT = 'TOP_LEFT',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
}

export enum ribbonType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
  WARNING = 'WARNING',
}

export interface IButtonGroup {
  id: number;
  title: string;
  isActive: boolean;
}

export enum continents {
  EUROPE = 'EUROPE',
  ASIA = 'ASIA',
  AFRICA = 'AFRICA',
  AUSTRALIA = 'AUSTRALIA',
  NORTH_AMERICA = 'NORTH AMERICA',
  SOUTH_AMERICA = 'SOUTH AMERICA',
}

interface ICountry {
  name: string;
  continent: string;
}

export const countries: ICountry[] = [
  { name: 'FRANCE', continent: continents.EUROPE },
  { name: 'SPAIN', continent: continents.EUROPE },
  { name: 'PORTUGAL', continent: continents.EUROPE },
  { name: 'ITALY', continent: continents.EUROPE },
  { name: 'GERMANY', continent: continents.EUROPE },
  { name: 'CHINA', continent: continents.ASIA },
  { name: 'INDIA', continent: continents.ASIA },
  { name: 'INDONESIA', continent: continents.ASIA },
  { name: 'JAPAN', continent: continents.ASIA },
  { name: 'KOREA', continent: continents.ASIA },
  { name: 'ANGOLA', continent: continents.AFRICA },
  { name: 'BURKINA FASO', continent: continents.AFRICA },
  { name: 'CAPE VERDE', continent: continents.AFRICA },
  { name: 'BENIN', continent: continents.AFRICA },
  { name: 'CAMEROON', continent: continents.AFRICA },
  { name: 'FIJI', continent: continents.AUSTRALIA },
  { name: 'SAMOA', continent: continents.AUSTRALIA },
  { name: 'TONGA', continent: continents.AUSTRALIA },
  { name: 'NEW ZEALAND', continent: continents.AUSTRALIA },
  { name: 'PALAU', continent: continents.AUSTRALIA },
  { name: 'CANADA', continent: continents.NORTH_AMERICA },
  { name: 'UNITED STATES', continent: continents.NORTH_AMERICA },
  { name: 'MEXICO', continent: continents.SOUTH_AMERICA },
  { name: 'ARGENTINA', continent: continents.SOUTH_AMERICA },
  { name: 'BREZIL', continent: continents.SOUTH_AMERICA },
  { name: 'CHILE', continent: continents.SOUTH_AMERICA },
  { name: 'COSTA RICA', continent: continents.SOUTH_AMERICA },
];

export enum pillType {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  SUCCESS = 'SUCCESS',
  DANGER = 'DANGER',
  WARNING = 'WARNING',
  INFO = 'INFO',
}
