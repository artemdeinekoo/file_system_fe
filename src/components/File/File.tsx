import file from "../../icons/file.png";
import trash from "../../icons/trash.svg";
import edit from "../../icons/edit.svg";
import styles from "./File.module.scss";
import { File } from "../../interfaces/File";

const FileOrFolder = ({
  id,
  name,
  content,
  createdAt,
  updatedAt,
  byteSize,
}: File) => {
  return (
    <div className={styles.obj} key={id}>
      <div className={styles.buttons}>
        <button>
          <img src={trash} alt="" />
        </button>
        <button>
          <img src={edit} alt="" />
        </button>
      </div>

      <img className={styles.icon} src={file} alt="" />
      <h4>{name}</h4>

      <div className={styles.metadata}>
        <span>created at: {createdAt}</span>
        <span>edited at: {updatedAt}</span>
        <span>size: {byteSize} bytes</span>
      </div>
    </div>
  );
};

export default FileOrFolder;
