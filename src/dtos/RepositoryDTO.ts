declare interface RepositoryDTO {
  id: number;
  name: string;
  description: string;
  url: string;
  platform: string;
  users: number;
  starts: number;
  time: string;
  stargazers_count: string;
  language: string;
  watchers: number;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
  };
  updated_at: string;
  html_url: string;
  tags: TagDTO[];
}