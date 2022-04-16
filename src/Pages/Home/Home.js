import React from 'react';
import { Col, Container, FormControl, InputGroup, Row, Table } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='background-color '>
            <section>

                <Container className='pt-4'>
                    <Row>
                        <Col xs={12} md={4}>




                            <section className='background-color-2'>

                                {/* Investment Update Section  */}

                                <div>
                                    <h5 className='text-white text-center pt-3 '>Investment Update</h5>
                                    <hr className='text-white w-50 mx-auto'></hr>
                                    <div className='border border-white rounded-2 w-75 mx-auto '>
                                        <Table responsive>

                                            <tbody >
                                                <td >

                                                    {Array.from({ length: 3 }).map((_, index) => (
                                                        <tr className='text-white b-none '>10LOGS </tr>
                                                    ))}
                                                </td>
                                                <td>

                                                    {Array.from({ length: 3 }).map((_, index) => (
                                                        <tr className='text-white b-none'>Table cell </tr>
                                                    ))}
                                                </td>
                                                <td>

                                                    {Array.from({ length: 3 }).map((_, index) => (
                                                        <tr className='text-white b-none'>Table cell </tr>
                                                    ))}
                                                </td>
                                            </tbody>
                                        </Table>




                                    </div>
                                </div>

                                {/* Updates & News */}

                                <section className='mt-4'>
                                    <div className='w-75 mx-auto border border-white rounded-pill'>
                                        <h5 className='text-white text-center mt-1  '>UPDATES & NEWS</h5>

                                    </div>
                                    <div className='mt-3'>
                                        <p>
                                            Updates And The News
                                        </p>
                                        <p>
                                            Updates And The News
                                        </p>
                                        <p>
                                            Updates And The News
                                        </p>
                                        <p>
                                            Updates And The News
                                        </p>
                                        <p>
                                            Updates And The News
                                        </p>

                                    </div>



                                </section>

                            </section>



                        </Col>
                        <Col xs={12} md={8}>

                            <Container className='my-3'>
                                <Row className='Container mx-auto '>
                                    <Col sm><div style={{ width: '250px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>TOTAL LOCKED</h5>
                                    </div></Col>

                                    <Col sm><div style={{ width: '250px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>RESERVED</h5>
                                    </div></Col>
                                </Row>
                            </Container>

                            <section>
                                <p style={{ fontSize: '15px' }} className='text-white container'>The IN&OUT platform is power with a low-risk high reward contract that operates similarily to a high-yield certificate of deposit by paying out 2% daily return on investment up to 3.65%.
                                    Participants can compound to extend their earnings for greater rewards and by deposits. Referral option is another great way to increase your earnings quickly</p>

                            </section>
                            <Container>
                                <h4 className='text-white'>YOUR ACCOUNT</h4>
                                <InputGroup className="mb-3 ">
                                    <FormControl
                                        className='background-color-4 b-none'
                                        placeholder=""
                                        aria-label=""
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text className='background-color-5 b-none text-white' id="basic-addon2">MAX</InputGroup.Text>
                                </InputGroup>
                            </Container>

                            <Container className='my-3'>
                                <Row className='Container mx-auto'>
                                    <Col sm><div style={{ width: '200px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>STAKED</h5>
                                    </div></Col>

                                    <Col sm><div style={{ width: '200px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>Climed</h5>
                                    </div></Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className='Container mx-auto'>
                                    <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>MAX PAYOUT</h5>
                                    </div></Col>
                                    <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>TO CLAM</h5>
                                    </div></Col>
                                    <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>REFERRALS</h5>
                                    </div></Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row className='Container mx-auto w-75 my-3'>
                                    <Col sm><div style={{ width: '180px', height: '60px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>COMPUND</h5>
                                    </div></Col>
                                    <Col sm><div style={{ width: '180px', height: '60px' }} className='background-color-3 mx-auto my-1'>
                                        <h5 className='text-white text-center'>CLAIM</h5>
                                    </div></Col>
                                </Row>
                            </Container>




                        </Col>
                    </Row>
                    <Container>
                        <Row className='Container mx-auto'>
                            <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                <h5 className='text-white text-center'>MAX PAYOUT</h5>
                            </div></Col>
                            <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                <h5 className='text-white text-center'>TO CLAM</h5>
                            </div></Col>
                            <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                <h5 className='text-white text-center'>REFERRALS</h5>
                            </div></Col>
                            <Col sm><div style={{ width: '180px', height: '80px' }} className='background-color-3 mx-auto my-1'>
                                <h5 className='text-white text-center '>REFERRALS</h5>
                            </div></Col>
                        </Row>
                    </Container>

                </Container>



            </section>

        </div>
    );
};

export default Home;