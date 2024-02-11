export interface File {
  id: number;
  name: string;
  parentFolderId: number | null;
  isFolder: boolean;
  content: string;
  createdAt: string;
  updatedAt: string;
  byteSize: number;
}

export interface IFile {
  name: string;
  conent: string;
  parentFolderId?: number;
}

export interface IUpdateFile {
  name?: string;
  content?: string;
}
