import React, { useEffect, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styles from './add-blog.module.css'
import { ADD_TITLE_BLOG, ADD_TRAILER_BLOG, ADD_CONTENT_BLOG } from '../../store/constiantLocalStorage';

const titleStogare = localStorage.getItem(ADD_TITLE_BLOG) || '';
const trailerStogare = localStorage.getItem(ADD_TRAILER_BLOG) || '';
const contentStogare = localStorage.getItem(ADD_CONTENT_BLOG) || '';

const AddBlogPage = () => {


    const [title, setTitle] = useState(titleStogare);
    const [trailer, setTrailer] = useState(trailerStogare);
    const [content, setContent] = useState(contentStogare);

    useEffect(() => {
        document.title = "Add Blog"
    }, []);


    const submit = (e) => {
        e.preventDefault();
        e.target.reset();
        
        console.log({ title, trailer, content }, e.target);
        reset();
    }

    const reset = (e) => {
        setTitle('');
        setTrailer('');
        setContent('');
        localStorage.removeItem(ADD_TITLE_BLOG);
        localStorage.removeItem(ADD_TRAILER_BLOG);
        localStorage.removeItem(ADD_CONTENT_BLOG);
    }

    const postData = () => {

    }

    const saveTitle = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
        localStorage.setItem(ADD_TITLE_BLOG, e.target.value);
    }

    const saveTrailer = (e) => {
        setTrailer(e.target.value);
        localStorage.setItem(ADD_TRAILER_BLOG, e.target.value);
    }

    const saveContent = (value) => {
        setContent(value);
        localStorage.setItem(ADD_CONTENT_BLOG, value);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submit} onReset={reset}>
                <label className={styles.label}>Title</label>
                <input className={styles.input} type="text" name="title" value={title} onChange={saveTitle} />
                <label className={styles.label}>Trailer</label>
                <input className={styles.input} type="text" 
                    name="trailer" value={trailer} onChange={saveTrailer} />
                <label className={styles.label}>Content</label>
                <CKEditor
                    data={content}
                    editor={ ClassicEditor }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        saveContent(data);
                    } }
                    className={styles.input}
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } }
                />
                <div className={styles.buttonContainer}>
                    <button type="submit" className={styles.button} >
                        Submit
                    </button>
                    <button type="reset" className={styles.button} >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}
export default AddBlogPage;