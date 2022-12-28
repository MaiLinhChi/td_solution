import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import style from './NavItem.module.scss';

const cx = classNames.bind(style);

const NavItem = ({ title, link }) => {
    return (
        <Link to={link} className={cx('nav-item')}>
            <span>{title}</span>
        </Link>
    );
};

export default NavItem;
