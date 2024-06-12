import about from '../assets/Images/about.png';

function Myabout() {
    return (
        <div className='txt bgblack'>
            <div className='centercontainer'>
                <h1 className='greenrec mt-5'>About Me</h1>
            </div>
            <div className="row pb-5 ">
                <div className=" col-sm-12 col-lg-6 col-md-6 text-white mt-5" >
                    <p style={{   marginLeft:'30px'  }}>
                        I am a Computer Science student at Sukkur IBA and 4-Year Fully Funded Scholarship Recipient.
                        Along with the above mentioned skill set I am proficient in C++ ,Java and Data Structures.
                        I am passionate about coding and problem-solving.
                        Committed to continuous learning and personal growth.
                        Let's connect and explore the world of technology together!
                    </p>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6 ">
                    <div className="img-container ">
                        <img src={about} alt='about' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myabout;
