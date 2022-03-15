import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Score.css'
import bat from '../Images/cricket-ball.png'
import bcb from '../Images/bcb.svg'
import ind from '../Images/ind.svg'
const Score = () => {
    return (
        <>

            <br /><br />
            <Navbar className='navheight'>
                <Container>
                <Nav className="meet">
                        <Nav.Link><h5> <img src={bcb} height={'50px'} alt="" /></h5></Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#home" className='textsize'>
                         
                        <small className='text-col'> <span className='team'>BAN</span> 278-6</small> <br />
                        <small className='text-col1'>45.5 overs</small>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link  className='parallelogram'><h6 className='batsman'> <img src={bat} height={'12px'} /> Shakib <br />45(67)</h6></Nav.Link>
                        <Nav.Link href="#features" className='parallelogram'><h6 className='batsman1'>Mahmudullah <br />78(80)</h6></Nav.Link>
                        <Nav.Link href="#pricing" className='parallelogram1'>< h6 className='runneed'>Ban need 33 run to win have 25 balls left</h6></Nav.Link>
                        <Nav.Link href="#pricing" className='parallelogram2'>
                            
                        <h6 className='bowler'>J Bumrah <span className='hidee'>00</span> 2-45 
                        <span className='totalover'> 9.5</span> <br /> 
                        
                         < div className='move'> 
                             
                             <div className='circle'><span className='totalover'>0</span></div>
                             <div className='circle'><span className='totalover'>4</span></div>
                             <div className='circle'><span className='totalover'>2</span></div>
                             <div className='circle'><span className='totalover'>1</span></div>
                             <div className='circle'><span className='totalover'>6</span></div>
                             <div className='circle'></div>

                         </div>
                        </h6>
                        
                        </Nav.Link>
                    </Nav>
                    <Nav className="meet">
                        <Nav.Link><h5><img src={ind} height={'50px'} /></h5></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Score;