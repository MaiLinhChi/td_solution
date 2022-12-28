import React from 'react';
import classNames from 'classnames/bind';
import style from './CarouselScale.module.scss';
import images from '~/assets/images';
import { ArrowLeft, ArrowRight } from '~/components/Svg';

const cx = classNames.bind(style);

const CarouselScale = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('carousel-scale')}>
                <div className={cx('item')}>
                    <div className={cx('image')}>
                        <img src={images.slide1} alt="slide1" />
                    </div>
                    <div className={cx('content')}>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className={cx('item', 'center')}>
                    <div className={cx('image')}>
                        <img src={images.slide2} alt="slide2" />
                    </div>
                    <div className={cx('content')}>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('image')}>
                        <img src={images.slide3} alt="slide3" />
                    </div>
                    <div className={cx('content')}>
                        <h4>Lorem ipsum dolor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <div className={cx('control')}>
                <ArrowLeft />
                <ArrowRight />
            </div>
        </div>
    );
};

export default CarouselScale;
