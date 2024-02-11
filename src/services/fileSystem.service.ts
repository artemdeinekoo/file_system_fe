import axios from "axios";

class fileSystemService {
  private API_URL = "http://127.0.0.1:8000";

  async getFileStructure(folderId: number | null) {
    if (folderId) {
      return axios.get(`${this.API_URL}/folders/${folderId}/objects`);
    } else {
      return axios.get(this.API_URL);
    }
  }
}

export default new fileSystemService();
