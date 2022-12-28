import classNames from 'classnames/bind';

import style from './Button.module.scss';

const cx = classNames.bind(style);

const Button = ({ children, className }) => {
    return <button className={cx('wrapper', className)}>{children}</button>;
};

export default Button;
