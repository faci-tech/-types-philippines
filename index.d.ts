interface Regions {
  name: string;
  long: string;
  key: string;
}

interface Cities {
  name: string;
  province: string;
  city: string;
}

interface Provices {
  name: string;
  region: string;
  key: string;
}

declare module "philippines" {
  export const regions: Regions[];
  export const cities: Cities[];
  export const provices: Provices[];
}
