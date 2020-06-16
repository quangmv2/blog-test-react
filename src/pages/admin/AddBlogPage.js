import React, { useEffect, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './add-blog.module.css'


const AddBlogPage = () => {


    const [title, setTitle] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        document.title = "Add Blog"
    }, []);


    const submit = (e) => {
        e.preventDefault();
        console.log({ title, trailer, content });
    }

    const postData = () => {

    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submit}>
                <label className={styles.label}>Tiêu đề</label>
                <input className={styles.input} type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                <label className={styles.label}>Tóm tăt</label>
                <input className={styles.input} type="text" name="trailer" onChange={(e) => setTrailer(e.target.value)} />
                <label className={styles.label}>Nội dung</label>
                <CKEditor
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setContent(data);
                    } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } }
                />
                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    )
}
export default AddBlogPage;