import React, {Suspense, lazy} from 'react';
import { Redirect } from 'react-router-dom';
import * as styles from './admin.module.css';
import Loading from '../components/Loading';

const isAuthorization = () => {
    const token = localStorage.getItem("token") || "";
    return token.length>0;
}

const Menu = lazy(() => import('../components/Menu'));

const PrivatePage = (MyCompoment) => {
    
    return (props) => {
        // if (!isAuthorization()) return <Redirect to="/login"/>        
        return <div className={styles.body}>
                <div className={styles.menu}>

                    <Suspense fallback="">
                            <Menu />
                    </Suspense>
                </div>

                <div className={styles.page}>
                    <Suspense fallback={<Loading />}>
                            <MyCompoment {...props}/>
                    </Suspense>
                </div>

            </div>
    }
}
export default PrivatePage;