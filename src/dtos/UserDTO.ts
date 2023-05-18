declare interface UserDTO {
  login: string;
  id: number;
  name: string;
  avatar_url: string;
  url: string;
  company: string;
  location: string;
  stars: number;
  message: string;
  followers: number;
  repositories: RepositoryDTO[];
}