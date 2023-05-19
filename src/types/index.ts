export interface MainType {
  created_at: string;
  delete_at: string;
  plants_id: number;
  current_grade: string;
  deleted_at: null;
  device_id: number;
  id: number;
  nickname: string;
  plant_grade_update_time: null;
  plant_type: string;
  updated_at: string;
  user_id: number;
}

export interface CommunityType {
  id: number;
  title: string;
  content: string;
  nickname: string;
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

  temperature: string;
  humid: string;
  moisture: string;
  bright: number;
  id: number;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  nickname: string;
  date: string;
  created_at: string;
  updated_at: string;
  view_count: number;
}
