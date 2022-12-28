import classNames from 'classnames/bind';

import styled from './OurValue.module.scss';

const cx = classNames.bind(styled);

const OurValue = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h1 className={cx('title')}>Our value</h1>
            </div>
            <p className={cx('description')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            </p>
            <h4 className={cx('company-name')}>TP Solution Company</h4>
        </div>
    );
};

export default OurValue;
