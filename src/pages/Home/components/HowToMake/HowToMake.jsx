import classNames from 'classnames/bind';

import style from './HowToMake.module.scss';

const cx = classNames.bind(style);

const HowToMake = () => {
    return <div className={cx('wrapper')}></div>;
};

export default HowToMake;
