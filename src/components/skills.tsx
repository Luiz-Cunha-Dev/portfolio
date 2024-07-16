import Image from 'next/image'
import mongo from '../assets/mongo.svg' 
import node from '../assets/node.svg' 
import react from '../assets/react.svg'
import ts from '../assets/ts.svg'

const Skills = () => {
    return (
        <div id="skills" className="min-h-screen w-9/12 flex flex-col items-center justify-start w-full pt-48">
            <h1 className="text-7xl text-white mb-28">Skills</h1>
            <div className='w-full flex space-x-36 justify-end relative'>
                <Image src={mongo} alt="mongo" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '0s'}} />
                <Image src={node} alt="node" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '0.6s'}} />
                <Image src={react} alt="react" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '1.2s'}} />
                <Image src={ts} alt="ts" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '1.8s'}} />



                <Image src={mongo} alt="mongo" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '2.4s'}} />
                <Image src={node} alt="node" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '3s'}} />
                <Image src={react} alt="react" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '3.6s'}} />
                <Image src={ts} alt="ts" width={100} height={100} className="animate-slide-in absolute -right-28" style={{animationDelay: '4.2s'}} />
            </div>
        </div>
    )
}

export default Skills