import React, {Component, PropTypes} from 'react';
import classNames from 'classnames/bind';
import style from './style.css';
import LAYOUT from '../../styles';
const cx = classNames.bind(style);

/**
 * List component to standardize the styling and html structure of any listing component on the page
 * Currently it support in-built layouts like wrap, horizontal scrolled, vertical scrolled. Also support
 * pre-defined item spacing
 *
 * Many components could be seen as list of something. E.g Menu is list of menuitem, Footer is list of links
 * RR or CrossSell is list of products, Slider is list of items, etc
 */
export default class List extends Component {

    /**
     * Supported React properties
     * @type {Object}
     */
    static propTypes = {

        /**
         * Optional field to give a name to component.
         * It need not be unique but can be handy if you want to know which list component is causing error
         * @type {[type]}
         */
        name: PropTypes.string,

        /**
         * Panel title
         * @type {[type]}
         */
        title: PropTypes.string,

        /**
         * Layout direction
         *
         * horizontal -> render horizontal with scrollbar if exceeds the screen width
         * vertical -> render vertical with or without scrollbar if height is defined
         * wrap -> wraps by width
         *
         * @type {[type]}
         */
        direction: PropTypes.oneOf([
            LAYOUT.DIRECTION.HORIZONTAL,
            LAYOUT.DIRECTION.VERTICAL,
            LAYOUT.DIRECTION.WRAP
        ]),

        /**
         * Padding on each cell
         * @type {[type]}
         */
        spacing: PropTypes.oneOf([
            LAYOUT.SPACING.COMFY,
            LAYOUT.SPACING.COZY,
            LAYOUT.SPACING.COMPACT,
            LAYOUT.SPACING.NONE
        ]),

        /**
         * Spacing signifying
         * @type {[type]}
         */
        itemSpacing: PropTypes.oneOf([
            LAYOUT.SPACING.COMFY,
            LAYOUT.SPACING.COZY,
            LAYOUT.SPACING.COMPACT,
            LAYOUT.SPACING.NONE
        ]),

        /**
         * Width of the each cell when direction is set to horizontal
         * @type {[type]}
         */
        itemWidth: PropTypes.string,

        /**
         * Height of the each cell when direction is set to vertical
         * @type {[type]}
         */
        itemHeight: PropTypes.string,

        /**
         * [data description]
         * @type {[type]}
         */
        datasource: PropTypes.array.isRequired,

        /**
         * Renderer method that returns React component. This component shall be wrapped by the list HTML
         * @type {[type]}
         */
        childRenderer: PropTypes.func.isRequired,

        /**
         * No of item per row and then wraps then onward
         * @type {[type]}
         */
        itemsPerRow: React.PropTypes.number,

        /**
         * Apply's border around the item as per style guide
         * @type {[type]}
         */
        bordered: React.PropTypes.bool,

        /**
         * Set Item level style that would be appended to <li>
         * @type {String}
         */
        itemStyleClass: React.PropTypes.string,

        /**
         * Set list level style that would be appended to <ul>
         * @type {String}
         */
        listStyleClass: React.PropTypes.string

    };

    /** @properties {Default set up} [description] */
    static defaultProps = {
        direction: LAYOUT.DIRECTION.HORIZONTAL,
        itemsPerRow: 0,
        spacing: LAYOUT.SPACING.COZY,
        bordered: false
    };

    /**
     * Renders the basic outer skeleton required to render the list
     * @return {ReactComponent}
     */
    render() {

        // Wrap this css to stop the page jump around when images are loading

        /**
         * Holds list of classes for outer most div structure
         * @type {[type]}
         */
        const mainClasses = cx('list-main', {
            comfy: this.props.spacing === LAYOUT.SPACING.COMFY,
            compact: this.props.spacing === LAYOUT.SPACING.COMPACT,
            cozy: this.props.spacing === LAYOUT.SPACING.COZY,
            none: this.props.spacing === LAYOUT.SPACING.NONE
        });

        /**
         * Each item in the list can be styled as well
         * @type {[type]}
         */
        const listItemClasses = cx({
            comfy: this.props.itemSpacing === LAYOUT.SPACING.COMFY,
            compact: this.props.itemSpacing === LAYOUT.SPACING.COMPACT,
            cozy: this.props.itemSpacing === LAYOUT.SPACING.COZY,
            none: this.props.itemSpacing === LAYOUT.SPACING.NONE
        }, this.props.itemStyleClass);

        /**
         * Render only the title section of the list component
         * @return {[type]} [description]
         */
        const renderTitle = () => {
            let element = false;

            if (this.props.title) {
                element = <h3>{this.props.title}</h3>;
            }

            return element;
        };

        /**
         * Render one of the cell item in the list
         * @param  {[type]} dataItem CurrentItem on the list of item to bind
         * @param  {[type]} index    Zero based index hinting the current item location
         * @return {[type]}          [description]
         */
        const renderItem = (dataItem, index) => (
            (<li className={listItemClasses}>
                {this.props.childRenderer(dataItem, index)}
            </li>)
        );

        /**
         * This is main function that builds the list structure for the component which in
         * turn uses renderItem to render indivitual item
         * @return {[type]} [description]
         */
        const renderList = () => {

            // This holds the final ReactDOM for list items
            let renderedHTML = '';

            const {direction, itemsPerRow, datasource, bordered} = this.props;

            /**
             * For UL tag we set appropriate class to allow vertical vs horizontal vs wrap
             * @type {[type]}
             */
            const bodyClasses = cx('list-body', {
                'list-scroll-v': (direction === LAYOUT.DIRECTION.VERTICAL),
                'list-scroll-h': (direction === LAYOUT.DIRECTION.HORIZONTAL),
                'list-as-table': (itemsPerRow > 0) && (direction === LAYOUT.DIRECTION.WRAP) && !bordered,
                'list-as-table-bordered': (itemsPerRow > 0) && (direction === LAYOUT.DIRECTION.WRAP) && bordered
            });

            if (datasource) {
                const totalItems = datasource.length;
                // If items per row is zero or undefined, then we will just let item naturally wrap
                // based on content
                let itmsPerRow = itemsPerRow > 0
                    ? itemsPerRow
                    : totalItems;

                // Only if items needs to be wrapped itemsPerRow attributes is useful
                // Reset to zero
                if (direction !== LAYOUT.DIRECTION.WRAP) {
                    itmsPerRow = 0;
                }

                // Holds the each row items if we need to support wrapped layout with item per row restriction
                // If item per row restriction does not apply then all cell goes in to single row
                let renderedItems = [];

                // Block that actually renders entire <ul><li>...</i></ul> magic
                renderedHTML = datasource.map((dataItem, index) => {

                    // Break in to new row based on item per row property
                    if ((index + 1) % itmsPerRow !== 0) {
                        renderedItems.push(renderItem(dataItem, index));

                        //Flush the last item
                        if (index + 1 === totalItems) {
                            return (
                                <ul className={this.props.listStyleClass}>
                                    {renderedItems}
                                </ul>
                            );
                        }
                    } else {
                        renderedItems.push(renderItem(dataItem, index));

                        // Each row in the component
                        const rowItem = (
                            <ul>
                                {renderedItems}
                            </ul>
                        );

                        // reset for new row
                        renderedItems = [];

                        // render given row
                        return rowItem;
                    }

                    return false; //render nothing
                });

                renderedItems = undefined;

            } else {
                // Preloader
                // TODO:PR: Preloader implementation is pending
                renderedHTML = () => (
                    <ul>
                        <li>Loading...</li>
                    </ul>
                );
            }

            // Body ReactDOM
            return (
                <div className={bodyClasses}>
                    {renderedHTML}
                </div>
            );

        };

        // Entire ReactDOM
        return (
            <div className={mainClasses}>
                {renderTitle()}
                {renderList()}
            </div>
        );
    }
}