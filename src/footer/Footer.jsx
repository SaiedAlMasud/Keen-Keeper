import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#244D3F] text-white rounded p-10">
                <div className='container text-center mx-auto space-y-4'>
                    <h1 className='text-5xl font-bold'>Keen<span className='font-semibold'>Keeper</span></h1>
                    <p className='opacity-75'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h3 className="text-xl opacity-90">Social Links</h3>
                    <div className='flex gap-6 justify-center '>
                        <img src="/src/assets/instagram.png" alt="" />
                        <img src="/src/assets/facebook.png" alt="" />
                        <img src="/src/assets/twitter.png" alt="" />
                    </div>
                    <div className="divider"></div>
                </div>
                
                <div className='flex justify-between container mx-auto mt-10 px-[15%]'>
                    <div>
                        <p className="text-white opacity-80">© 2026 KeenKeeper. All rights reserved.</p>
                    </div>
                    <div className='flex gap-5'>
                        <p className="text-white opacity-80">Privacy Policy</p>
                        <p className="text-white opacity-80">Terms of Service</p>
                        <p className="text-white opacity-80">Cookies</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;