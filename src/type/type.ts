export interface MainType {
  visiter_id: number;
  contents: string;
  writer: string;
  create_at: string;
  delete_at: string;
  plants_id: number;
}

export interface CommunityType {
  title: string;
  content: string;
  writer: string;
  user_id: number;
}

export interface MbtiType {
  mbti: string;
  description: string;
}
