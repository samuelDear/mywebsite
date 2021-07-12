export interface Course {
  reference?: string;
  datecreated: {
    month: string;
    year: string;
  };
  institute: string;
  es: {
    title: string;
  };
  en: {
    title: string;
  };
}
