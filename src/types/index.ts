export interface MainType {
  visiter_id: number;
  contents: string;
  writer: string;
  create_at: string;
  delete_at: string;
  plants_id: number;
}

export interface CommunityType {
  id: number;
  title: string;
  content: string;
  writer: string;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface UserType {
  id: number;
  email: string;
  iat: number;
  exp: number;
  iss: string;
}

export interface MbtiType {
  mbti: string;
  description: string;
}

export interface DataType {
  time: string;
  data: {
    temperature: string;
    humid: string;
    moisture: string;
    bright: number;
    id: number;
  };
}
