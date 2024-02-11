import folder from "../../icons/folder.svg";
import trash from "../../icons/trash.svg";
import edit from "../../icons/edit.svg";
import styles from "./Folder.module.scss";
import { Folder as FolderInterface } from "../../interfaces/Folder";

const Folder = ({
  id,
  name,
  createdAt,
  updatedAt,
  byteSize,
  setFolderId,
}: FolderInterface) => {
  return (
    <div onClick={() => setFolderId(id)} className={styles.obj} key={id}>
      <div className={styles.buttons}>
        <button>
          <img src={trash} alt="" />
        </button>
        <button>
          <img src={edit} alt="" />
        </button>
      </div>

      <img className={styles.icon} src={folder} alt="" />
      <h4>{name}</h4>

      <div className={styles.metadata}>
        <span>created at: {createdAt}</span>
        <span>edited at: {updatedAt}</span>
        <span>size: {byteSize} bytes</span>
      </div>
    </div>
  );
};

export default Folder;
