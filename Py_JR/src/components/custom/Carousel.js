var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

// @ts-ignore
var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={
// @ts-ignore
            onChange} onClickItem={
// @ts-ignore
            onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="images/carrusel/1.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="images/carrusel/2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="images/carrusel/3.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="images/carrusel/4.jpg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="images/carrusel/5.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
