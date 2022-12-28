import classNames from 'classnames/bind';

import style from './OurProduct.module.scss';
import CarouselScale from '../CarouselScale';

const cx = classNames.bind(style);

const OurProduct = () => {
    return (
        <div className={cx('our-product')}>
            <h1 className={cx('title')}>Our Product</h1>
            <p className={cx('subtitle')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <CarouselScale />
        </div>
    );
};

export default OurProduct;
