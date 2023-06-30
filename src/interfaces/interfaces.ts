export interface login {
  email: string;
  password: string;
}

export interface signup {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IGenericErrorResponse {
  success: false;
  message: string;
}

export interface Room {
  createdAt: Date;
  roomLanguage: string;
  roomName: string;
  roomOwner: [object];
  roomTopic: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}
