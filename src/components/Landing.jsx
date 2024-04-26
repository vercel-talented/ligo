import Ligo_Network from '../assets/ligo-network.svg';
import BTC_Layer_2_1 from '../assets/btc-layer-2-1.svg';
import BTC_Layer_2_2 from '../assets/btc-layer-2-2.svg';
import BTC_Layer_2_3 from '../assets/btc-layer-2-3.svg';
import Check from '../assets/check.svg';
import twitter from '../assets/twitter.svg';
import telegram from '../assets/telegram.svg';
import github from '../assets/github.svg';

const Landing = () => {
    return (
        <>
            <div className="landing">
                <div className="ligo-network">
                    <p className="title text-2xl mb-3">Ligo Network</p>
                    <pre className="text-4xl mb-10">
                        Unlock the Potential of a Layer 2 with True Decentralization.
                    </pre>
                    <button type="button" className="text-white border-white bg-black hover:text-gray-900 hover:bg-white mb-10">Start Staking</button>
                    <img src={Ligo_Network} alt="Ligo Network" />
                </div>
                <div className='btc-layer-2'>
                    <p className='text-5xl mb-10'>A High-Performance BTC Layer 2</p>
                    <p className='text-2xl mb-10'>The first fully-decentralized Layer 2 with fast and cheap transactions</p>
                    <div className='grid grid-cols-3 mt-10'>
                        <div className='grid grid-cols-1'>
                            <img src={BTC_Layer_2_1} />
                            <pre className='mt-7'>
                                From Bitcoin 7TPS to{"\n"}
                                LIGO with up to 30,000{"\n"}
                                TPS or more
                            </pre>
                        </div>
                        <div className='grid grid-cols-1'>
                            <img src={BTC_Layer_2_2} />
                            <pre className='mt-7'>
                                Innovative consensus{"\n"}
                                offering more security and{"\n"}
                                decentralization
                            </pre>
                        </div>
                        <div className='grid grid-cols-1'>
                            <img src={BTC_Layer_2_3} />
                            <pre className='mt-7'>
                                Solution fully{"\n"}
                                programmable with{"\n"}
                                gaming language LUA
                            </pre>
                        </div>
                    </div>
                </div>
                <div className='strategic-partnerships'>
                    <p className='text-5xl'>Strategic Partnerships</p>
                    <div className='grid grid-cols-2'>
                        <div>
                            <img src='https://ligo.network/_next/image?url=%2Fimages%2Fsinohope.png&w=256&q=75' />
                            <p className='small-title text-xl'>Sinohope</p>
                            <pre className='text-xl'>
                                Through partnering with Sinohope,{"\n"}
                                Ligo Network secures an advanced{"\n"}
                                stance in asset protection and{"\n"}
                                management, empowering our{"\n"}
                                technology with leading MPC solutions.{"\n"}
                                This synergy aims to set new standards{"\n"}
                                in blockchain security and trust.{"\n"}
                            </pre>
                        </div>
                        <div>
                            <img src='https://ligo.network/_next/image?url=%2Fimages%2Fwaterdrip.png&w=256&q=75' />
                            <p className='small-title text-xl'>Waterdrip Capital</p>
                            <pre className='text-xl'>
                                Waterdrip Capital's early investment{"\n"}
                                has been a driving force, enabling Ligo{"\n"}
                                Network to pioneer innovative BTC{"\n"}
                                Layer 2 solution. Their support{"\n"}
                                highlights our shared commitment to{"\n"}
                                evolving digital asset infrastructure.{"\n"}
                            </pre>
                        </div>
                    </div>
                </div>
                <div className='next-era'>
                    <div className='grid grid-cols-2'>
                        <div>
                            <img src='https://ligo.network/_next/image?url=%2Fimages%2Fligo_secure.png&w=640&q=75' />
                        </div>
                        <div>
                            <h2 className='small-title mb-4 text-4xl text-left'>Enter the Next Era with Ligo</h2>
                            <pre className='text-left mb-8 text-lg'>
                                Ligo addresses the limitations of the original Bitcoin network,{"\n"}
                                including scalability and the absence of Turing-complete{"\n"}
                                capabilities. Our state-of-the-art Layer2 solution ushers in a{"\n"}
                                new paradigm where decentralized applications thrive on the{"\n"}
                                bedrock of the most trusted blockchain.{"\n"}
                            </pre>
                            <ul className='text-left'>
                                <li className='mb-4 flex'>
                                    <img src={Check} className='h-5' />
                                    Years of research at the National University of Singapore, Blockchain Lab
                                </li>
                                <li className='mb-4 flex'>
                                    <img src={Check} className='h-5' />
                                    The most performant layer 2 - Innovative consensus and fully decentralized
                                </li>
                                <li className='mb-4 flex'>
                                    <img src={Check} className='h-5' />
                                    Working with listed partner Sinohope, for virtual custody and MPC Wallet mgmt.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='ready-layer'>
                    <div className='grid grid-cols-2 inline items-center'>
                        <div style={{ margin: '0 auto' }}>
                            <p className='small-title text-4xl text-left'>Ready to try out our Layer 2</p>
                            <p className='text-left mb-6'>Build lightning-fast dApps with Ligo Network.</p>
                            <button type="button" className="inline text-white border-white bg-black hover:text-gray-900 hover:bg-white">Soon Available For Developers</button>
                        </div>
                        <div>
                            <img src='https://ligo.network/_next/image?url=%2Fimages%2Fligo_performance.png&w=640&q=75' />
                        </div>
                    </div>
                </div>

                <div className="footer dark:bg-gray-900 w-full z-20 top-0 start-0">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://ligo.network/_next/image?url=%2Fimages%2Fligo-green.png&w=256&q=75" alt="Ligo Logo" />
                        </a>
                        <div className="md:order-2">
                            <div className='flex social-icon'>
                                <img src={telegram} className='bg-white rounded-lg'/>
                                <img src={twitter} className='bg-white rounded-lg'/>
                                <img src={github} className='bg-white rounded-lg'/>
                            </div>
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white md:p-0">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-white md:p-0">Team</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr />
            </div>
        </>
    )
}

export default Landing;