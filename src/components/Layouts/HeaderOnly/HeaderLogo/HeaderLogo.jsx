import styles from './HeaderLogo.module.scss';
import classNames from 'classnames/bind';
// import Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Tippy for dropdown
import Tippy from '@tippyjs/react/headless';
// Wrapper
import Wrapper from '../../../Popper/Wrapper';


const cx = classNames.bind(styles);

function Header() {
    return (
        <div className="bg-primary bg-opacity-25 p-1 w-100">
            <Navbar expand="lg">
                <Container className='d-flex justify-content-center'>
                    <Navbar.Brand href="#home">
                        <div className={cx("logo")}>
                            <img src='../../../../../img/logo/logo1.jpg' className={cx("imgLogo")} />
                            <span className={cx("textLogo")}>REPAIR</span>
                        </div>
                    </Navbar.Brand>

                </Container>
            </Navbar >
        </div >

    );
}

export default Header;