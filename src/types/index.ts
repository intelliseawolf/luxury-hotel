export interface Hotel {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2?: string;
  postcode: string;
  town: string;
  countryCode: string;
  country: string;
  facilities: Array<{ code: string }>;
  telephone: string;
  email: string;
  images: Array<{ url: string }>;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: {
    timezone: string;
  };
  starRating: string;
}

export interface Room {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
  };
  disabledAccess: boolean;
  bedConfiguration: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  facilities: Array<{
    code: string;
    name: string;
  }>;
}

export interface RatePlan {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: {
    name: string;
    text: string;
    penalty: string;
    applicable: string;
    hour: string;
  };
}
