import s from './style.module.css';

const LayoutBlock = (props) => {

    const sectionStyle = {
        backgroundImage: `url(${props.urlBg})`
    };
    
    return (
        <section className={s.root} style={sectionStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3 style={props.colorBg}>{props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={[s.desc, s.full].join(' ')}>
                        <p>{props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LayoutBlock;