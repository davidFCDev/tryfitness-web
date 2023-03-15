import ClassContainerA from './ClassContainerA'
import ClassContainerB from './ClassContainerB'
import './class.css';

const Class = () => {
    return (
        <section id='class' className='class'>
            <div className='section-title'>
                <h1>CLASES</h1>
            </div>
            <div className='class-container'>
                <ClassContainerA />
                <ClassContainerB />
            </div>
        </section>
    )
}

export default Class