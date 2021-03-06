import React, {Component} from 'react';
import style from './style.css';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activeIndex: this.props.defaultShow,
        }
    }

    selectedIndex(obj) {
        this.setState({
            activeIndex: (this.state.activeIndex == obj.selected) ? 0 : obj.selected
        })
    }

    renderList() {
        const {elements} = this.props;
        return elements.map((item, index) => {
            let uniqueId = index + 1;
            return (
                <AccordionSub title={item.title} content={item.content} showOnLoad={item.showOnLoad}
                              key={index} uniqueId={uniqueId} selectedIndex={(obj) => this.selectedIndex(obj)}
                              activeIndex={this.state.activeIndex}/>
            );
        });
    }

    render() {
        let panes = this.renderList();
        //const stateStyle = (this.state.active)?style.active:style.inactive;
        return (
            <div className={style.accordionSection}>
                {panes}
            </div>
        );

    }

}//end of Accordion

//Adding propTypes
Accordion.propTypes = {
    elements: React.PropTypes.array,
    activeIndex: React.PropTypes.number
};

//Adding defaultProps in here

//other Component

class AccordionSub extends Component {

    constructor(props) {
        super(props);
    }

    toggle(id) {
        //send the index to the parent Component
        this.props.selectedIndex({selected: id});
    }

    render() {
        const {content, title, uniqueId, activeIndex, showOnLoad} = this.props;
        const stateStyle = (activeIndex == uniqueId) ? style.active : "";
        const accordionStyle = (stateStyle) ? (style.accordion + " " + style.active) : (style.accordion);
        const panelStyle = (stateStyle) ? (style.panel + " " + style.show) : (style.panel);
        return (
            <div className="accordion-box">
                <h3 className={accordionStyle} onClick={this.toggle.bind(this, this.props.uniqueId)}>{title}</h3>
                <div className={panelStyle}> {content} </div>
            </div>
        )

    }
}

//Adding propTypes
AccordionSub.propTypes = {
    content: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    uniqueId: React.PropTypes.number.isRequired,
    activeIndex: React.PropTypes.number.isRequired,
    showOnLoad: React.PropTypes.bool.isRequired
};

export default Accordion