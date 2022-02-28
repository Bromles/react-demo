import { useContext } from 'react';
import { AppContext } from '../../index';
import { Sidebar } from 'primereact/sidebar';
import { observer } from 'mobx-react-lite';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = observer(() => {
    const store = useContext(AppContext);

    return (
        <>
            <nav className={ styles.topbar }>
                <i className="pi pi-bars " style={ { 'fontSize': '1.5em' } } onClick={ store.toggleSidebar }/>
            </nav>

            <Sidebar visible={ store.isShowSidebar() } onHide={ store.toggleSidebar }>
                <div className={ styles.verticalNav }>
                    <Link to="/" className={ styles.link } onClick={ store.toggleSidebar }>Домашняя страница</Link>
                    <Link to="currency" className={ styles.link } onClick={ store.toggleSidebar }>Валюты</Link>
                    <Link to="mu" className={ styles.link } onClick={ store.toggleSidebar }>Единицы измерения</Link>
                </div>
            </Sidebar>
        </>
    );
});

export default Navbar;
