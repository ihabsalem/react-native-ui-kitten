export default interface QResponse <T> {
    status: number;
    data: T;
    message: any[];
  }
  