import React, {useState} from "react";
import styles from "./create-post.module.scss"
import ProfileNewsHeader from "../profile-news/profile-news-header/profile-news-header";
import {db} from "../../firebase-config";
import { collection, addDoc } from '@firebase/firestore';

function CreatePost () {
    const postsCollectionRef = collection(db, "posts");
    const [newTitle, setNewTitle] = useState("");
    const [newDescr, setNewDescr] = useState("");
    const defaultImg = "https://firebasestorage.googleapis.com/v0/b/udevs-blog.appspot.com/o/hai-tech-10.jpg?alt=media&token=65ce3a7f-02f8-4041-a891-4ff5cbd147a5"

    const createPoster = async () => {
        await addDoc(postsCollectionRef, {title: newTitle, descr: newDescr, img: defaultImg})
    }
    return (
        <div>
            <ProfileNewsHeader></ProfileNewsHeader>
            <div className={styles.createPostContainer}>
                <h1 className={styles.createPostHeading}>Настройки публикации</h1>
                <span className={styles.createPostTitle}>Название</span>
                <input 
                className={styles.createPostInputTitle} 
                placeholder="Write Title" 
                onChange={(event) => setNewTitle(event.target.value)}
                />
                <span className={styles.createPostDescr}>Описание</span>
                <textarea 
                className={styles.createPostInputDescr} 
                placeholder="Write Description"
                onChange={(event) => setNewDescr(event.target.value)}
                ></textarea>
                <button className={styles.createPostBtn} onClick={createPoster}>
                    Создать
                </button>
            </div>
        </div>
    );
}

export default CreatePost;