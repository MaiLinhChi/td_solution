import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const cx = classNames.bind(style);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Navbar />
            {/* <Banner /> */}
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
