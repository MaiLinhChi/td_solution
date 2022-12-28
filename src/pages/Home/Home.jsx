import classNames from 'classnames/bind';

import style from './Home.module.scss';
import Meeting from './components/Meeting';
import OurProduct from './components/OurProduct/OurProduct';
import OurValue from './components/OurValue';
import HowToMake from './components/HowToMake';

const cx = classNames.bind(style);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Meeting />
            <OurProduct />
            <OurValue />
            <HowToMake />
        </div>
    );
};

export default Home;
