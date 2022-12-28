import classNames from 'classnames/bind';

import style from './Meeting.module.scss';
import images from '../../../../assets/images';
import { User } from '../../../../components/Svg';
import Button from '../../../../components/Button';

const cx = classNames.bind(style);

const Meeting = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={images.meeting} alt="meeting" />
            <div className={cx('text')}>
                <div className={cx('header')}>
                    <h1 className={cx('title')}>Our team</h1>
                    <User />
                </div>
                <p className={cx('description')}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                    aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                </p>
                <h4 className={cx('company-name')}>TP Solution Company</h4>
                <Button className={cx('custom-btn')}>Join our team</Button>
            </div>
        </div>
    );
};

export default Meeting;
