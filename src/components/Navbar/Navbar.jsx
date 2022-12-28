import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Navbar.module.scss';
import config from '../../config';
import { Logo } from '../Svg';
import NavItem from './component/NavItem/NavItem';

const cx = classNames.bind(style);

const Navbar = () => {
    return (
        <div className={cx('wrapper')}>
            <nav className={cx('nav')}>
                <Link to={config.routes.home}>
                    <Logo className={cx('logo')} />
                </Link>
                <div className={cx('list-nav')}>
                    {config.navbar.map((item, index) => (
                        <NavItem key={index} title={item.title} link={item.link} />
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
