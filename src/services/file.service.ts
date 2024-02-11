import axios from "axios";
import { IFile, IUpdateFile } from "../interfaces/File";

class fileService {
  private API_URL = "http://127.0.0.1:8000/files";

  async addFile({ name, parentFolderId, conent }: IFile) {
    return axios.post<any, any, IFile>(`${this.API_URL}/`, {
      name,
      conent,
      parentFolderId,
    });
  }

  async getById(id: number) {
    return axios.get(`${this.API_URL}/${id}`);
  }

  async updateFile(id: number, { name, content }: IUpdateFile) {
    return axios.put<any, any, IUpdateFile>(`${this.API_URL}/${id}/`, {
      name,
      content,
    });
  }

  async deleteById(id: number) {
    return axios.delete(`${this.API_URL}/${id}`);
  }
}

export default new fileService();
