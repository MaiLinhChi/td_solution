import classNames from 'classnames/bind';

import style from './Banner.module.scss';
import images from '../../assets/images';

const cx = classNames.bind(style);

const Banner = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={images.phone} alt="" className={cx('phone')} />
        </div>
    );
};

export default Banner;
