import styles from "./Files.module.scss";
import search from "../../icons/search.svg";
import { useGetFilesStructure } from "../../hooks/useGetFilesStructure";
import Folder from "../Folder/Folder";
import File from "../File/File";

import { File as FileIntrface } from "../../interfaces/File";
import { Folder as FolderInterface } from "../../interfaces/Folder";
import { useState } from "react";

const Files = () => {
  const [folderId, setFolderId] = useState<number | null>(null);
  const { data, isLoading, isError, refetch } = useGetFilesStructure(folderId);

  const handleSetFolderId = (id: number) => {
    setFolderId(id);
    refetch();
  };

  return (
    <div className={styles.files}>
      <div className={styles.top}>
        <h2>src</h2>
        <div className={styles.buttons}>
          <button>+</button>
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </div>

      <div className={styles.main}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : isError ? (
          <h2>An error occured</h2>
        ) : (
          <>
            {data.map((obj: FileIntrface | FolderInterface) =>
              obj.isFolder ? (
                <Folder
                  id={obj.id}
                  name={obj.name}
                  parentFolderId={obj.parentFolderId}
                  isFolder={obj.isFolder}
                  createdAt={obj.createdAt}
                  updatedAt={obj.updatedAt}
                  byteSize={obj.byteSize}
                  setFolderId={handleSetFolderId}
                />
              ) : (
                <File
                  content=""
                  id={obj.id}
                  name={obj.name}
                  parentFolderId={obj.parentFolderId}
                  isFolder={obj.isFolder}
                  createdAt={obj.createdAt}
                  updatedAt={obj.updatedAt}
                  byteSize={obj.byteSize}
                />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Files;
