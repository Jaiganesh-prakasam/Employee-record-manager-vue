export interface IEmpDetails {
  id: number;
  empGeneral: {
    firstName: string;
    lastName: string;
    fullName: string;
    dob: string;
    age: number;
  };
  empContact: {
    email: string;
    phone: string;
    socialInfo: { url: string; type: string }[];
  };
  empSkill: { skill: string; rate: number }[];
  empExperience: {
    companyName: string;
    location: { city: string; country: string };
    companyUrl: string;
    role: string;
    fromDate: string;
    toDate: string;
    experience: string | number;
  }[];
}
