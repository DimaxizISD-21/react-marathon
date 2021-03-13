import s from './style.module.css';

const LayoutBlock = ({title, colorBg, urlBg, children}) => {
    const sectionStyle = {
        backgroundImage: `url(${urlBg})`
    };
    
    return (
        <section className={s.root} style={sectionStyle}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3 style={colorBg}>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={[s.desc, s.full].join(' ')}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LayoutBlock;