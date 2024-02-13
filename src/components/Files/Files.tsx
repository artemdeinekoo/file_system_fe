import styles from "./Files.module.scss";
import search from "../../icons/search.svg";
import { useGetFilesStructure } from "../../hooks/useGetFilesStructure";
import Folder from "../Folder/Folder";
import File from "../File/File";

import { File as FileIntrface } from "../../interfaces/File";
import { useState, useEffect } from "react";
import AddFolderModal from "../AddFolderModal/AddFolderModal";
import AddFileModal from "../AddFileModal/AddFileModal";

const Files = () => {
  const [folderId, setFolderId] = useState<number | null>(null);
  const { data, isFetching, isError, refetch } = useGetFilesStructure(folderId);
  const [addFolder, setAddFolder] = useState<boolean>(false);
  const [addFile, setAddFile] = useState<boolean>(false);

  useEffect(() => {
    refetch();
  }, [folderId]);

  const handleSetFolderId = (id: number) => {
    setFolderId(id);
  };

  return (
    <div className={styles.files}>
      <div className={styles.top}>
        <h2>{data?.name}</h2>
        <div className={styles.buttons}>
          <button onClick={() => setAddFile(true)}>New File</button>
          <button onClick={() => setAddFolder(true)}>New Folder</button>
          <button>Sort by name</button>
          <button>Sort by size</button>
          <button>
            <img src={search} alt="" />
          </button>
        </div>
      </div>

      <span className={styles.divider}></span>

      {folderId && (
        <button
          onClick={() => {
            setFolderId(data?.parentFolderId);
            refetch();
          }}
          className={styles.back}
        >
          Back
        </button>
      )}

      <div className={styles.main}>
        {isFetching ? (
          <h2>Loading...</h2>
        ) : isError ? (
          <h2>An error occured</h2>
        ) : data.items.length === 0 ? (
          <p>The currrent folder is empty</p>
        ) : (
          <>
            {data.items.map((obj: FileIntrface) =>
              obj.isFolder ? (
                <Folder
                  key={obj.id}
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
                  key={obj.id}
                  id={obj.id}
                  content={obj.content}
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

      <AddFolderModal
        visibility={addFolder}
        close={() => {
          setAddFolder(false);
        }}
        parentFolderId={folderId}
      />

      <AddFileModal
        visibility={addFile}
        close={() => {
          setAddFile(false);
        }}
        parentFolderId={folderId}
      />
    </div>
  );
};

export default Files;
