import logo from '../nekogram.svg'


const about = () => {
    return (
        <div className="about">
            <div className="detail">
                <div>
                    <img src={logo} className='picture' alt='logo' />
                </div>
                <div className='name'>
                    詹舜智 Shun-Chih 
                </div>
                <div className='job_title'>
                    Software Engineer
                </div>
                <div className='email'>
                    Email : m23568n@gmail.com
                </div>
                <div className='description'>
                    喜歡學習新的技術及分享自己所學的知識~
                </div>
            </div>
        </div>
        )
}

export default about