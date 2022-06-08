//import s from './Section.module.css'
import PropTypes from 'prop-types';

const Section = (props) => {
    const {title, children} = props;

        return (
            <div>
              <h1>{title}</h1>
                {children}
            </div>
          )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;